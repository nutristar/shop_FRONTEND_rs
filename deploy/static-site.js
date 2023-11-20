"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtc2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXNCO0FBQ3RCLDRDQUE0QztBQUM1Qyw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELDRFQUE0RTtBQUM1RSwwQ0FBMEM7QUFDMUMsK0NBQStDO0FBRS9DLGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsd0JBQXdCO0FBRXhCLHdCQUF3QjtBQUN4Qiw2REFBNkQ7QUFDN0QsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQyxVQUFVO0FBRVYsdURBQXVEO0FBQ3ZELG1GQUFtRjtBQUNuRix5Q0FBeUM7QUFDekMsMkJBQTJCO0FBQzNCLCtEQUErRDtBQUMvRCwrRUFBK0U7QUFDL0UsV0FBVztBQUVYLFVBQVU7QUFFViwyQ0FBMkM7QUFDM0Msa0VBQWtFO0FBQ2xFLDBFQUEwRTtBQUMxRSx1Q0FBdUM7QUFDdkMsc0JBQXNCO0FBQ3RCLG1DQUFtQztBQUNuQyxVQUFVO0FBQ1YsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjIS91c3IvYmluL2VudiBub2RlXG4vLyBpbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xuLy8gaW1wb3J0ICogYXMgY2xvdWRmcm9udCBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udCc7XG4vLyBpbXBvcnQgKiBhcyBzM2RlcGxveSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMtZGVwbG95bWVudCc7XG4vLyBpbXBvcnQgKiBhcyBjbG91ZGZyb250X29yaWdpbnMgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQtb3JpZ2lucyc7XG4vLyBpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbi8vIGltcG9ydCB7IFJlbW92YWxQb2xpY3kgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5cbi8vIGV4cG9ydCBjbGFzcyBIdHRwT25seVNpdGUgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuLy8gICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4vLyAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuLy8gICAgIC8vIENvbnRlbnQgYnVja2V0XG4vLyAgICAgY29uc3Qgc2l0ZUJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgJ1NpdGVCdWNrZXQnLCB7XG4vLyAgICAgICByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1ksXG4vLyAgICAgICBhdXRvRGVsZXRlT2JqZWN0czogdHJ1ZSwgLy8gXG4vLyAgICAgfSk7XG5cbi8vICAgICAvLyBDbG91ZEZyb250IGRpc3RyaWJ1dGlvbiB0aGF0IG9ubHkgc2VydmVzIEhUVFBcbi8vICAgICBjb25zdCBkaXN0cmlidXRpb24gPSBuZXcgY2xvdWRmcm9udC5EaXN0cmlidXRpb24odGhpcywgJ1NpdGVEaXN0cmlidXRpb24nLCB7XG4vLyAgICAgICBkZWZhdWx0Um9vdE9iamVjdDogXCJpbmRleC5odG1sXCIsXG4vLyAgICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbi8vICAgICAgICAgb3JpZ2luOiBuZXcgY2xvdWRmcm9udF9vcmlnaW5zLlMzT3JpZ2luKHNpdGVCdWNrZXQpLFxuLy8gICAgICAgICB2aWV3ZXJQcm90b2NvbFBvbGljeTogY2xvdWRmcm9udC5WaWV3ZXJQcm90b2NvbFBvbGljeS5BTExPV19BTEwsIC8vIFxuLy8gICAgICAgfSxcbiAgICAgIFxuLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gRGVwbG95IHNpdGUgY29udGVudHMgdG8gUzMgYnVja2V0XG4vLyAgICAgbmV3IHMzZGVwbG95LkJ1Y2tldERlcGxveW1lbnQodGhpcywgJ0RlcGxveVNpdGVDb250ZW50cycsIHtcbi8vICAgICAgIHNvdXJjZXM6IFtzM2RlcGxveS5Tb3VyY2UuYXNzZXQoJy4vcGF0aC10by15b3VyLXdlYnNpdGUtZmlsZXMnKV0sXG4vLyAgICAgICBkZXN0aW5hdGlvbkJ1Y2tldDogc2l0ZUJ1Y2tldCxcbi8vICAgICAgIGRpc3RyaWJ1dGlvbixcbi8vICAgICAgIGRpc3RyaWJ1dGlvblBhdGhzOiBbJy8qJ10sXG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH1cblxuXG4iXX0=