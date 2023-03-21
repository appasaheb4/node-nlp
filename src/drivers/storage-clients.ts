import {BlobServiceClient} from '@azure/storage-blob';

export class StorageClient {
  static getStorage(): BlobServiceClient {
    return BlobServiceClient.fromConnectionString(
      'DefaultEndpointsProtocol=https;AccountName=lpwebsite;AccountKey=JAdOCTofdl5Ogf59gUhaP9MoIZ0a+EV1TvQLvcPu8VdNix3VjaxVjeA6fvYKK2Oy6Kx3MXfRfPEg+AStICfWuQ==;EndpointSuffix=core.windows.net'
    );
  }
}
