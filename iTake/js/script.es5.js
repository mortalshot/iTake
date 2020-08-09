"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  ;
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  }); // languages

  var languages = document.querySelector(".languages");
  languages.addEventListener('click', function (e) {
    languages.classList.toggle('open');
  });
  window.addEventListener('click', function (e) {
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.languages')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var select = _step.value;

        if (!select.contains(e.target)) {
          select.classList.remove('open');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }); // burger

  $('.menu__burger').click(function (e) {
    $('.menu__burger, .menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  }); // slider

  $('.how-use__slider').slick({
    dots: true,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 650,
      settings: {
        arrows: false
      }
    }]
  }); // up

  var btn = $('.up-btn');
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '1000');
  }); // Go To

  $(".menu").on("click", ".menu__link", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('.menu__burger').removeClass('active');
    $('.menu__body').removeClass('active'); // $('body').removeClass('lock');

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});