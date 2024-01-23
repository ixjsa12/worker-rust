use async_trait::async_trait;
use serde::{Deserialize, Serialize};
use serde_repr::{Deserialize_repr, Serialize_repr};
use worker::*;
#[derive(Deserialize_repr, Serialize, Debug)]
#[repr(u8)]
enum InteractionType {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutoComplete = 4,
    ModalSubmit = 5,
}

#[allow(dead_code)]
#[derive(Serialize_repr, Deserialize_repr, Debug)]
#[repr(u8)]
pub(crate) enum InteractionResponseType {
    Pong = 1,
    // Acknowledge = 2,
    // ChannelMessage = 3,
    ChannelMessageWithSource = 4,
    ACKWithSource = 5,
    AutoCompleteResult = 8,
}

#[derive(Deserialize, Serialize, Clone, Debug)]
pub(crate) struct ApplicationCommandInteractionDataOption {
    pub(crate) name: String,
    #[serde(rename = "type")]
    pub(crate) ty: ApplicationCommandOptionType,
    pub(crate) value: Option<String>,
    pub(crate) focused: Option<bool>,
}

#[derive(Deserialize, Serialize, Debug)]
pub(crate) struct ApplicationCommandInteractionData {
    pub(crate) name: String,
    pub(crate) options: Option<Vec<ApplicationCommandInteractionDataOption>>,
}

#[derive(Serialize)]
pub(crate) struct InteractionApplicationCommandCallbackData {
    // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
    pub(crate) content: Option<String>,
    pub(crate) choices: Option<Vec<ApplicationCommandOptionChoice>>,
}

#[derive(Deserialize, Serialize, Debug, Clone)]
pub(crate) struct User {
    id: String,
    username: String,
    discriminator: String,
}

#[derive(Deserialize, Serialize, Debug, Clone)]
pub(crate) struct Member {
    user: Option<User>,
    nick: Option<String>,
    permissions: Option<String>,
}

#[derive(Deserialize, Serialize, Debug)]
pub(crate) struct Interaction {
    #[serde(rename = "type")]
    ty: InteractionType,
    data: Option<ApplicationCommandInteractionData>,
    token: String,
    guild_id: Option<String>,
    channel_id: Option<String>,
    user: Option<User>,
    member: Option<Member>,
}

#[derive(Serialize_repr, Deserialize_repr, Clone, Debug)]
#[repr(u8)]
pub(crate) enum ApplicationCommandOptionType {
    // https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
}
#[derive(Deserialize, Serialize, Clone)]
pub(crate) struct ApplicationCommandOption {
    // https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    pub(crate) name: String,
    pub(crate) description: String,
    #[serde(rename = "type")]
    pub(crate) ty: ApplicationCommandOptionType,
    pub(crate) choices: Option<Vec<ApplicationCommandOptionChoice>>,
    pub(crate) autocomplete: Option<bool>,
    pub(crate) required: Option<bool>,
}

#[derive(Deserialize, Serialize, Clone, Debug)]
pub(crate) struct ApplicationCommandOptionChoice {
    // https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
    pub(crate) name: String,
    pub(crate) value: String,
}

#[derive(Serialize)]
pub struct InteractionResponse {
    #[serde(rename = "type")]
    pub(crate) ty: InteractionResponseType,
    pub(crate) data: Option<InteractionApplicationCommandCallbackData>,
}
#[async_trait(?Send)]
pub(crate) trait Command {
    async fn respond(
        &self,
        _input: &CommandInput,
    ) -> Result<InteractionApplicationCommandCallbackData, InteractionError> {
        // Implement the command logic here
        unimplemented!()
    }

    fn name(&self) -> String {
        // The command name, ie `return "greet".to_string()` for /greet
        unimplemented!()
    }

    fn description(&self) -> String {
        // A short description
        unimplemented!()
    }
    fn options(&self) -> Option<Vec<ApplicationCommandOption>> {
        // add any arguments/choices here, more info at https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
        unimplemented!()
    }

    async fn autocomplete(
        &self,
        _input: &CommandInput,
    ) -> Result<Option<InteractionApplicationCommandCallbackData>, InteractionError> {
        // If your command supports autocomplete implement the logic here
        unimplemented!()
    }
}

pub struct DiscordApp {
    commands: Vec<Box<dyn Command + Sync>>,
    interaction: Option<Interaction>,
    req: Request,
    ctx: RouteContext<()>,
}

impl DiscordApp {
    pub fn push_command(&mut self, command: Box<dyn Command + Sync>) {
        self.commands.push(command);
    }
    pub fn new(req: Request, ctx: RouteContext<()>) -> DiscordApp {
        DiscordApp {
            commands: Vec::new(),
            interaction: None,
            req,
            ctx,
        }
    }
    pub fn handel(&mut self) -> worker::Result<Response> {
        Response::ok("ok")
    }
}
