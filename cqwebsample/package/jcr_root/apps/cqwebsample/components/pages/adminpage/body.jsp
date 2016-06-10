<%@page session="false" %>
<%@page contentType="text/html; charset=utf-8" %>
<%@include file="/apps/cqwebsample/global/global.jsp" %>
<body>
    <div class="wrapper">
        <cq:include script="content.jsp" />
    </div>
    <cq:include path="timing" resourceType="foundation/components/timing"/>
    <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
	<!-------------------- General Jquery ---------------------------->
    <cq:includeClientLib js="cq.cqwebsample"/>
    <!---------------------------------------------------------------->
</body>
