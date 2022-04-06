"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  "D:\\web\\project\\Portfolio\\Leonardo\\src\\js\\main.js": [function (require, module, exports) {
    "use strict"; // Slick slider

    $(document).ready(function () {
      $('.slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        cssEase: 'linear'
      }); // Плавный скролл

      $("body").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
          scrollTop: top
        }, 1500);
      });
    }); // Ajax

    $(document).ready(function () {
      $("#send_btn").click(function () {
        sendAjaxForm('result_form', 'ajax_form', 'mail.php');
        return false;
      });
    });

    function sendAjaxForm(result_form, ajax_form, url) {
      $.ajax({
        url: url("../mail.php"),
        //url страницы (action_ajax_form.php)
        type: "POST",
        //метод отправки
        dataType: "html",
        //формат данных
        data: $("#" + ajax_form).serialize(),
        // Сеарилизуем объект
        success: function success(response) {
          //Данные отправлены успешно
          result = $.parseJSON(response);
          $('#result_form').html('Name: ' + result.name + '<br>Email: ' + result.email);
        },
        error: function error(response) {
          // Данные не отправлены
          $('#result_form').html('Ошибка. Данные не отправлены.');
        }
      });
    }
  }, {}]
}, {}, ["D:\\web\\project\\Portfolio\\Leonardo\\src\\js\\main.js"]);
//# sourceMappingURL=maps/main.js.map
