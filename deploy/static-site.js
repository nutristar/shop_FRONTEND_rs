// #!/usr/bin/env node
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.HttpOnlySite = void 0;
// const s3 = require("aws-cdk-lib/aws-s3");
// const cloudfront = require("aws-cdk-lib/aws-cloudfront");
// const s3deploy = require("aws-cdk-lib/aws-s3-deployment");
// const cloudfront_origins = require("aws-cdk-lib/aws-cloudfront-origins");
// const constructs_1 = require("constructs");
// const aws_cdk_lib_1 = require("aws-cdk-lib");
// class HttpOnlySite extends constructs_1.Construct {
//     constructor(scope, id) {
//         super(scope, id);
//         // Content bucket
//         const siteBucket = new s3.Bucket(this, 'SiteBucket', {
//             removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY,
//             autoDeleteObjects: true, // 
//         });
//         // CloudFront distribution that only serves HTTP
//         const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
//             defaultRootObject: "index.html",
//             defaultBehavior: {
//                 origin: new cloudfront_origins.S3Origin(siteBucket),
//                 viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL, // 
//             },
//         });
//         // Deploy site contents to S3 bucket
//         new s3deploy.BucketDeployment(this, 'DeploySiteContents', {
//             sources: [s3deploy.Source.asset('./path-to-your-website-files')],
//             destinationBucket: siteBucket,
//             distribution,
//             distributionPaths: ['/*'],
//         });
//     }
// }
// exports.HttpOnlySite = HttpOnlySite;
// //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtc2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EseUNBQXlDO0FBQ3pDLHlEQUF5RDtBQUN6RCwwREFBMEQ7QUFDMUQseUVBQXlFO0FBQ3pFLDJDQUF1QztBQUN2Qyw2Q0FBNEM7QUFFNUMsTUFBYSxZQUFhLFNBQVEsc0JBQVM7SUFDekMsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixpQkFBaUI7UUFDakIsTUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDbkQsYUFBYSxFQUFFLDJCQUFhLENBQUMsT0FBTztZQUNwQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsR0FBRztTQUM3QixDQUFDLENBQUM7UUFFSCxnREFBZ0Q7UUFDaEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN6RSxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLGVBQWUsRUFBRTtnQkFDZixNQUFNLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUNuRCxvQkFBb0IsRUFBRSxVQUFVLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEdBQUc7YUFDckU7U0FFRixDQUFDLENBQUM7UUFFSCxvQ0FBb0M7UUFDcEMsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3hELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDaEUsaUJBQWlCLEVBQUUsVUFBVTtZQUM3QixZQUFZO1lBQ1osaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBNUJELG9DQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XG5pbXBvcnQgKiBhcyBjbG91ZGZyb250IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZGZyb250JztcbmltcG9ydCAqIGFzIHMzZGVwbG95IGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMy1kZXBsb3ltZW50JztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnRfb3JpZ2lucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgUmVtb3ZhbFBvbGljeSB9IGZyb20gJ2F3cy1jZGstbGliJztcblxuZXhwb3J0IGNsYXNzIEh0dHBPbmx5U2l0ZSBleHRlbmRzIENvbnN0cnVjdCB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgLy8gQ29udGVudCBidWNrZXRcbiAgICBjb25zdCBzaXRlQnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCAnU2l0ZUJ1Y2tldCcsIHtcbiAgICAgIHJlbW92YWxQb2xpY3k6IFJlbW92YWxQb2xpY3kuREVTVFJPWSxcbiAgICAgIGF1dG9EZWxldGVPYmplY3RzOiB0cnVlLCAvLyBcbiAgICB9KTtcblxuICAgIC8vIENsb3VkRnJvbnQgZGlzdHJpYnV0aW9uIHRoYXQgb25seSBzZXJ2ZXMgSFRUUFxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbiA9IG5ldyBjbG91ZGZyb250LkRpc3RyaWJ1dGlvbih0aGlzLCAnU2l0ZURpc3RyaWJ1dGlvbicsIHtcbiAgICAgIGRlZmF1bHRSb290T2JqZWN0OiBcImluZGV4Lmh0bWxcIixcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjoge1xuICAgICAgICBvcmlnaW46IG5ldyBjbG91ZGZyb250X29yaWdpbnMuUzNPcmlnaW4oc2l0ZUJ1Y2tldCksXG4gICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZGZyb250LlZpZXdlclByb3RvY29sUG9saWN5LkFMTE9XX0FMTCwgLy8gXG4gICAgICB9LFxuICAgICAgXG4gICAgfSk7XG5cbiAgICAvLyBEZXBsb3kgc2l0ZSBjb250ZW50cyB0byBTMyBidWNrZXRcbiAgICBuZXcgczNkZXBsb3kuQnVja2V0RGVwbG95bWVudCh0aGlzLCAnRGVwbG95U2l0ZUNvbnRlbnRzJywge1xuICAgICAgc291cmNlczogW3MzZGVwbG95LlNvdXJjZS5hc3NldCgnLi9wYXRoLXRvLXlvdXItd2Vic2l0ZS1maWxlcycpXSxcbiAgICAgIGRlc3RpbmF0aW9uQnVja2V0OiBzaXRlQnVja2V0LFxuICAgICAgZGlzdHJpYnV0aW9uLFxuICAgICAgZGlzdHJpYnV0aW9uUGF0aHM6IFsnLyonXSxcbiAgICB9KTtcbiAgfVxufVxuXG5cbiJdfQ==