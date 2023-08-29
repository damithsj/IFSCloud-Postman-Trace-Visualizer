# Postman visualizer for IFS Cloud projection trace

You can get the IFS trace data for a projection call by adding the query parameter `odata-debug`.
This will add the trace information in `ifs-trace` node of the response message. Since the trace data is in JSON format, it's hard to interpert the information using tools like Postman.

[Postman Visualizer](https://learning.postman.com/docs/sending-requests/visualizer/) is a good tool where you can visually represent the request responses. This project intebd to build a visualizer for representing IFS trace information in readable format in Postman.

## How to use
- [x] Create a new Postman Collection
- [X] Go to the **Tests** tab of the collection
- [X] Paste the code
- [X] Add a new request to the collection, and use any IFS projection call.
- [X] Makesure the query parameter `odata-debug` is included in the request

Eg: `{{ifs_url}}/main/ifsapplications/projection/v1/YOUR_PROJECTION_CALL?odata-debug=json`
- [X] Go to the visualize tab in the response    
