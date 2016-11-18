sap.ui.define(['sap/ui/core/Control', 'jquery.sap.global'], function(Control, jQuery){
    return Control.extend('Header', {
      metadata: {
          properties: {
              rows: {
                type: 'int',
                defaultValue: 1
              },
              line: {
                type: 'int',
                defaultValue: 3
              }
          }
      },

      init: function()
      {
        //   this._$placeHolder = $("<th></th>")
        //   var tr=$("<tr></tr>");
        //   tr.appendTo(this._$placeHolder);
        //   for(var j=0;j<3;j++)
        //   {
        //       var td=$("<td>"+'id+'+j+"</td>");
        //       td.appendTo(tr);
        //   }


          this._$placeHolder = $("<tr></tr>");
          for(var j=0;j<3;j++)
          {
              var td=$("<td>"+'id+'+j+"</td>");
              td.appendTo(this._$placeHolder);
          }

      },

      renderer: function(oRm, oControl)
      {

          oRm.write("<div");
          oRm.writeControlData(oControl);
          oRm.addClass('demo-map');
          oRm.writeClasses();
        //   oRm.addStyle('width', oControl.getWidth());
        //   oRm.addStyle('height', oControl.getHeight());
          oRm.writeStyles();
          oRm.write(">");
          oRm.write("</div>");


        //   oRm.write("<table");
        //   oRm.writeControlData(oControl);
        //   oRm.addClass('demo-map');
        //   oRm.writeClasses();
        // //   oRm.addStyle('width', oControl.getWidth());
        // //   oRm.addStyle('height', oControl.getHeight());
        // //   oRm.writeStyles();
        //   oRm.write(">");
        //   oRm.write("</table>");

      },

      onBeforeRendering: function()
      {
          console.log('before');
      },

      onAfterRendering: function()
      {
          this.$().append(this._$placeHolder);
        //   this._leafletMap = L.map(this._$placeHolder.get(0), {
        //     center: [51.505, -0.09],
        //     zoom: 13
        //   });
        //   this._tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this._leafletMap);
      },

    //   _mapPlaceHolder_resize_handler: function(e)
    //   {
    //       this._leafletMap.invalidateSize();
    //   }
    })
});
