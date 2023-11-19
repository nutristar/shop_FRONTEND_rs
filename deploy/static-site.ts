// #!/usr/bin/env node
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
// import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
// import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
// import { Construct } from 'constructs';
// import { RemovalPolicy } from 'aws-cdk-lib';

// export class HttpOnlySite extends Construct {
//   constructor(scope: Construct, id: string) {
//     super(scope, id);

//     // Content bucket
//     const siteBucket = new s3.Bucket(this, 'SiteBucket', {
//       removalPolicy: RemovalPolicy.DESTROY,
//       autoDeleteObjects: true, // 
//     });

//     // CloudFront distribution that only serves HTTP
//     const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
//       defaultRootObject: "index.html",
//       defaultBehavior: {
//         origin: new cloudfront_origins.S3Origin(siteBucket),
//         viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL, // 
//       },
      
//     });

//     // Deploy site contents to S3 bucket
//     new s3deploy.BucketDeployment(this, 'DeploySiteContents', {
//       sources: [s3deploy.Source.asset('./path-to-your-website-files')],
//       destinationBucket: siteBucket,
//       distribution,
//       distributionPaths: ['/*'],
//     });
//   }
// }


