({
    doInit : function(component) {
        $A.createComponent(
            "c:wideQuickAction",{},
            function(content, status){
                if (status === "SUCCESS"){
                    component.find("overlayLib").showCustomModal({
                        header: "I AM WIDE",
                        body : content,
                        cssClass: "slds-modal_large",
                        showCloseButton: true
                    }).then(
                        $A.getCallback(function() {
                            debugger;
                            $A.get("e.force:closeQuickAction").fire();
                        })
                    );
                   
                } else alert("Error: "+status);
            }
        );
    }
})
