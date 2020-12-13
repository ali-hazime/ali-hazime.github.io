    $(document).ready(function() {

      $(".projects").magnificPopup({
          delegate: 'a',
          type:'image',
          gallery: {
              enabled: true
          },

          zoom: {
            enabled: true,
            duration: 300, 
            easing: 'ease-in-out',
            opener: function(openerElement) {
          
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
      });

      $(".projects2").magnificPopup({
          delegate: 'a',
          type:'image',
          gallery: {
              enabled: true
          },

          zoom: {
            enabled: true,
            duration: 300, 
            easing: 'ease-in-out',
            opener: function(openerElement) {
          
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
      });
   
    $(".projects3").magnificPopup({
          delegate: 'a',
          type:'image',
          gallery: {
              enabled: true
          },

          zoom: {
            enabled: true,
            duration: 300, 
            easing: 'ease-in-out',
            opener: function(openerElement) {
          
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
      });

      $(".projects4").magnificPopup({
          delegate: 'a',
          type:'image',
          gallery: {
              enabled: true
          },

          zoom: {
            enabled: true,
            duration: 300, 
            easing: 'ease-in-out',
            opener: function(openerElement) {
          
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
      });

    });