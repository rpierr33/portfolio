// Mersad font for headings
import MersadWoff2 from './mersad/Mersad-ExtraBold.woff2';
import MersadWoff from './mersad/Mersad-ExtraBold.woff';
import MersadTtf from './mersad/Mersad-ExtraBold.ttf';

// Space Mono font for subtitles and nav
import SpaceMonoWoff2 from './space-mono/SpaceMono-Bold.woff2';
import SpaceMonoWoff from './space-mono/SpaceMono-Bold.woff';
import SpaceMonoTtf from './space-mono/SpaceMono-Bold.ttf';
import SpaceMonoItalicWoff2 from './space-mono/SpaceMono-BoldItalic.woff2';
import SpaceMonoItalicWoff from './space-mono/SpaceMono-BoldItalic.woff';
import SpaceMonoItalicTtf from './space-mono/SpaceMono-BoldItalic.ttf';

// Make Sans font for everything else
import MakeSansWoff2 from './make-sans/MakeSans-Regular.woff2';
import MakeSansWoff from './make-sans/MakeSans-Regular.woff';
import MakeSansTtf from './make-sans/MakeSans-Regular.ttf';


export const mersad = {
    fontFamily: 'Mersad',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 800,
    src: `
        url(${MersadWoff2}) format('woff2'),
        url(${MersadWoff}) format('woff'),
        url(${MersadTtf}) format('ttf')
    `
};

export const spaceMonoBold = {
    fontFamily: 'Space Mono Bold',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        url(${SpaceMonoWoff2}) format('woff2'),
        url(${SpaceMonoWoff}) format('woff'),
        url(${SpaceMonoTtf}) format('ttf')
    `
}

export const spaceMonoItalic = {
    fontFamily: 'Space Mono Bold Italic',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        url(${SpaceMonoItalicWoff2}) format('woff2'),
        url(${SpaceMonoItalicWoff}) format('woff'),
        url(${SpaceMonoItalicTtf}) format('ttf')
    `
}

export const makeSansReg = {
    fontFamily: 'Make Sans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        url(${MakeSansWoff2}) format('woff2'),
        url(${MakeSansWoff}) format('woff'),
        url(${MakeSansTtf}) format('ttf')
    `
}
