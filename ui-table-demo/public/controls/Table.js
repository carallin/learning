sap.ui.define(['sap/ui/core/Control', 'jquery.sap.global'], function(Control, jQuery){
    return Control.extend('Table', {
      metadata: {
          properties: {
              rows: {
                type: 'int',
                defaultValue: 3
              },
              lines: {
                type: 'int',
                defaultValue: 5
              }
          }
      },

      init: function()
      {
          this._$placeHolder = $("<tbody></tbody>");
          var tr = $('<tr></tr>');
          tr.appendTo(this._$placeHolder);
          var rows = this.getRows();
          var lines = this.getLines();
          for (var i = 0; i < lines; i++) {
              var th=$('<th>'+'th+'+i+"</th>");
              th.appendTo(tr);
          }

          for (var row = 0; row < rows-1; row++) {
              tr = $('<tr></tr>');
              tr.appendTo(this._$placeHolder);
              for(var line = 0; line < lines; line++)
              {
                  var td=$("<td>"+'td+'+line+"</td>");
                  td.appendTo(tr);
              }
          }

        // this._$placeHolder = $("<tr></tr>");
        // for(var j=0;j<3;j++)
        // {
        //     var td=$("<td>"+'id+'+j+"</td>");
        //     td.appendTo(this._$placeHolder);
        // }

      },

      renderer: function(oRm, oControl)
      {

          oRm.write("<table");
          oRm.writeControlData(oControl);
          oRm.addClass('demo-map');
          oRm.writeClasses();
        //   oRm.addStyle('width', oControl.getWidth());
        //   oRm.addStyle('height', oControl.getHeight());
        //   oRm.writeStyles();
          oRm.write(">");
          oRm.write("</table>");

      },

      onBeforeRendering: function()
      {
          console.log('before');
      },

      onAfterRendering: function()
      {
          this.$().append(this._$placeHolder);

      }
  })
});
