# Postman Visualizer for IFS Cloud Projection trace

You can get the IFS trace data for a projection call by adding the query parameter `odata-debug`.
This will add the trace information in `ifs-trace` node of the response message. Since the trace data is in JSON format, it's hard to interpert the information using tools like Postman.

[Postman Visualizer](https://learning.postman.com/docs/sending-requests/visualizer/) is a good tool where you can visually represent the request responses. This project intebd to build a visualizer for representing IFS trace information in readable format in Postman.

### How to Use
- [x] Create a new Postman Collection
- [X] Go to the **Tests** tab of the collection
- [X] Copy the code from [src/postman-visualizer-ifscloud-trace.js](src/postman-visualizer-ifscloud-trace.js) and paste in the Postman Tests.
- [X] Add a new request to the collection, and use any IFS projection call.
- [X] Makesure the query parameter `odata-debug` is included in the request

Eg: `{{ifs_url}}/main/ifsapplications/projection/v1/YOUR_PROJECTION_CALL?odata-debug=json`
- [X] Go to the **Visualize** tab in the response. Trace information can be seen in readable format.
![IFS trace visualizer for Postman](/images/Postman-response-visualizer-ifs-trace.png)

### Features
- **Free text search** - You can search by any keyword
- **Filter based on log level** - You can filter messages based on category (TRACE, INFORMATION, DEBUG)

### Contribute
There are many response visualization possibilities with Postman. Tryout your own and/or create an [issue](https://github.com/damithsj/IFSCloud-Postman-Trace-Visualizer/issues) if you would like it to be published! 
