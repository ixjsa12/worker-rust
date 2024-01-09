use pdf::build::*;
use pdf::content::*;
use pdf::file::FileOptions;
use pdf::font::{Font, FontData, TFont};
use pdf::object::*;
use pdf::primitive::Name;
use pdf::primitive::PdfString;
use worker::*;
pub async fn index(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let mut builder = PdfBuilder::new(FileOptions::cached());
    let mut pages = Vec::new();
    let font = Font {
        data: FontData::TrueType(TFont {
            base_font: Some(Name::from("Helvetica")),
            first_char: None,
            font_descriptor: None,
            last_char: None,
            widths: None,
        }),
        encoding: Some(pdf::encoding::Encoding::standard()),
        name: None,
        subtype: pdf::font::FontType::TrueType,
        to_unicode: None,
        _other: Default::default(),
    };
    let font_name = Name::from("F42");
    let content = Content::from_ops(vec![
        Op::BeginText,
        Op::SetTextMatrix {
            matrix: Matrix {
                a: 1.0,
                b: 0.0,
                c: 0.0,
                d: 1.,
                e: 1.,
                f: 380.,
            },
        },
        Op::TextFont {
            name: font_name.clone(),
            size: 20.,
        },
        Op::TextDraw {
            text: PdfString::from("111111"),
        },
        Op::TextNewline,
        Op::SetTextMatrix {
            matrix: Matrix {
                a: 1.0,
                b: 0.0,
                c: 0.0,
                d: 1.,
                e: 1.,
                f: 370.,
            },
        },
        Op::TextDraw {
            text: PdfString::from("222222"),
        },
        Op::EndText,
    ]);
    let new_page = PageBuilder::from_content(content, &NoResolve);
    match new_page {
        Ok(mut new_page) => {
            new_page.media_box = Some(pdf::object::Rect {
                left: 0.0,
                top: 0.0,
                bottom: 400.0,
                right: 400.0,
            });
            let resources = Resources::default();
            new_page.resources = resources;
            let build_font = builder.storage.create(font);
            if let Ok(build_font) = build_font {
                new_page
                    .resources
                    .fonts
                    .insert(font_name.clone(), build_font.into());
            }

            pages.push(new_page);
            let catalog = CatalogBuilder::from_pages(pages);

            let mut info = InfoDict::default();
            info.title = Some(PdfString::from("test"));

            let data = builder.info(info).build(catalog);
            match data {
                Ok(data) => Response::from_bytes(data),
                Err(_) => Response::ok("123"),
            }
        }
        Err(_) => return Response::ok("123"),
    }
}
