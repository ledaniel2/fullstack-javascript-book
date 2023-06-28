import AWS from 'aws-sdk';
import sharp from 'sharp';

exports.handler = async (event) => {
    const s3 = new AWS.S3();
    const sourceBucket = event.Records[0].s3.bucket.name;
    const sourceKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
    
    const params = {
        Bucket: sourceBucket,
        Key: sourceKey
    };
    
    const inputData = await s3.getObject(params).promise();

    const resizedImage = await sharp(inputData.Body)
        .resize(100, 100)
        .toBuffer();
    
    await s3.putObject({
        Bucket: sourceBucket,
        Key: `thumbnail/${sourceKey}`,
        Body: resizedImage,
        ContentType: 'image'
    }).promise();
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Thumbnail created successfully'
        }),
    };
};
