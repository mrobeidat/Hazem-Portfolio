import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'bgvor73l',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-02-01',
    token:"sk0PbfXdoUOLbLz6DMMRu83UACeSnGoFSGd2bl51QSdkI3OyTodfVNUQnEUEUiPBCyhRhpgS1Cjah8aA93UWP43b9SsQHS2CjKnhdPxHuNedCRhK9klTkk2mr9dSiXOXEno9HTXd1GoroYu9WgyCnDNRdAc2tCh6ZInSRGbvQoiIGbuJyoD8",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);