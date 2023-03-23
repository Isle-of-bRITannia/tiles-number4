import { Tile } from './tiles/api.js';

import { fireGirl, uh } from './tiles/imageTiles/index.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 600,
    height = 600;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas ?.getContext('2d');

const tile = Tile.above(
    Tile.beside(
        Tile.above(
            Tile.beside(Tile.pure('White'), uh),
            Tile.beside(Tile.pure('White'), uh, uh, uh, uh, Tile.pure('White')),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
            ),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
            ),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
            ),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
            ),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
            ),
            Tile.pure("white"),
            Tile.above(
                Tile.beside(uh, uh, uh, uh, uh),
                Tile.beside(uh, uh, uh, uh, uh),
                Tile.beside(uh, uh, uh, uh, uh),
                Tile.beside(uh, uh, uh, uh, uh),
                Tile.beside(uh, uh, uh, uh, uh)
            ),
            Tile.pure("white"),
            Tile.beside(uh, uh, uh, uh, uh),
            Tile.beside(
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh)
            )
        ),
        Tile.beside(
            Tile.above(
                Tile.beside(Tile.pure('White'), uh),
                Tile.above(
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                ),
                Tile.above(
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                ),
                Tile.above(
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                ),
                Tile.above(
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                ),
                Tile.above(
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                    Tile.beside(uh, uh, uh, uh, uh, uh, uh, uh, uh, Tile.pure("White"), Tile.pure("White"), Tile.pure("White"), Tile.pure("White")),
                ),
                Tile.pure("white"),
                Tile.pure("white"),
                Tile.pure("white"),
                Tile.quad(
                    Tile.above(
                        uh, uh, uh, uh
                    ),
                    Tile.pure("White"),
                    Tile.pure("White"),
                    Tile.pure("White")
                ),
                Tile.beside(
                    Tile.quad(uh, uh, uh, uh),
                    Tile.quad(uh, uh, uh, uh),
                    Tile.quad(uh, uh, uh, uh),
                    Tile.quad(uh, uh, uh, uh)
                )
            )
        ),
        Tile.beside(
            Tile.above(
                Tile.pure("white"),
                Tile.pure("white"),
                Tile.above(uh, uh, uh, uh, uh, uh, uh, uh, uh, uh),
                Tile.pure("white"),
                Tile.above(uh, uh),
                Tile.pure("white"),
                Tile.above(uh, uh, uh, uh, uh, uh, uh, uh),
                Tile.beside(
                    Tile.quad(uh, uh, uh, uh),
                    Tile.quad(uh, uh, uh, uh),
                )
            ),
            Tile.above(
                uh,
                Tile.pure("white"),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.quad(uh, uh, uh, uh),
                Tile.beside(
                    Tile.quad(uh, uh, uh, uh),
                    Tile.quad(uh, uh, uh, uh),
                )
            )
        )
    )
    // Tile.beside(
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    //     Tile.quad(uh, uh, uh, uh),
    // )
);

const raster = rasterize({ width, height })(tile);

renderRaster(raster)(ctx);

console.log('done');