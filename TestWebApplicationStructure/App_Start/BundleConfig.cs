using System.Web;
using System.Web.Optimization;

namespace TestWebApplicationStructure
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/bower_components/angular-loading-bar/build/loading-bar.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                //"~/bower_components/moment/moment.js",
                "~/bower_components/jquery/dist/jquery.js",
                "~/bower_components/underscore/underscore.js",
                "~/bower_components/angular/angular.js",
                "~/bower_components/angular-resource/angular-resource.js",
                "~/bower_components/angular-route/angular-route.js",
                "~/bower_components/angular-animate/angular-animate.js",
                "~/bower_components/angular-moment/angular-moment.js",
                "~/bower_components/angular-underscore/angular-underscore.js",
                "~/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "~/bower_components/angular-ui-router/release/angular-ui-router.js",
                "~/bower_components/angular-loading-bar/build/loading-bar.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/app")
                //.Include(
                //"~/app/app.js",
                //"~/app/config/config.js",
                //"~/app/home.controller.js"
                //)); 
                .IncludeDirectory("~/app", "*.js", true));

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
