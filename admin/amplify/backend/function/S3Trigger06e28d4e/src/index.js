const sharp = require("sharp");
const aws = require("aws-sdk");
const s3 = new aws().S3;

exports.handler = async function (event, context) {
  // If the event type is delete return false

  if (event.Records[0] === "ObjectRemoved:Delete") return;

  /*   console.log("Received S3 event:", JSON.stringify(event, null, 2)); */

  const BUCKET = event.Records[0].s3.bucket.name;
  const KEY = event.Records[0].s3.object.key;

  try {
    // Fetch image from S3
    let image = await s3.getObject({ Bucket: BUCKET, Key: KEY }).promis();

    image = await sharp(image.Body);

    const metadata = await image.metadata();

    if (metadata.width > 1000) {
      const resizedImage = image.resize({ width: 1000 }).toBuffer();

      await s3
        .putObject({
          Bucket: BUCKET,
          Body: resizedImage,
          Key: KEY,
        })
        .promis();
    }
  } catch (error) {
    context.fail(`exiting at error files ${error}`);
  }
};
