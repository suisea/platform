
var Shareabouts = Shareabouts || {};

(function(S, $, console){
  S.LeafletSidebarView = Backbone.View.extend({
    events: {},

    initialize: function () {
      var self = this;
      this.render();
      self.sidebar = L.control.sidebar('leaflet-sidebar', {
        position: 'left'
      });
      self.sidebar.addTo(this.options.mapView.map);
    },

    render: function () {
      var self = this;

      this.$el.html(Handlebars.templates['leaflet-sidebar-content'](self));

      return this;
    }
  });
})(Shareabouts, jQuery, Shareabouts.Util.console);
