
Java.perform(function () {
    const Activity = Java.use('android.app.Activity');
    Activity.onResume.implementation = function () {
        console.log('[*] onResume called on: ' + this.getClass().getName());
        this.onResume();
    };
});
