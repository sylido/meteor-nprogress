// Tests
Tinytest.add('NProgress can be initalized', function (test) {
  test.isNotNull(NProgress, 'nprogress should exist');
  test.isTrue(typeof(NProgress) === "object", 'nprogress should be an object');
  test.isTrue(typeof(NProgress.start) === "function", 'nprogress should be a function');
});
