const sasToken = process.env.storagesastoken || "sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-05-28T16:49:40Z&st=2021-05-24T08:49:40Z&spr=https&sig=Ce0EinaxCMsiqnNfo9wCRr8%3D"; 
const containerName = `storage-images`;
const storageAccountName = process.env.storageresourcename || "storagename";

  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
      </button>
    </div>s
  );

  const uploadFileToBlob = async (file) => {
    if (!file) return [];
  
    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );
    // get Container - full public read access
    const containerClient = blobService.getContainerClient(containerName);
  
    // upload file
    await createBlobInContainer(containerClient, file);
  
    // get list of blobs in container
    return getBlobsInContainer(containerClient);
  };

  await blobClient.setMetadata({UserName : 'shubham'});

  const getBlobsInContainer = async (containerClient) => {
    const returnedBlobUrls = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      // if image is public, just construct URL
      returnedBlobUrls.push(
        `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
      );
    }
  
    return returnedBlobUrls;
  };