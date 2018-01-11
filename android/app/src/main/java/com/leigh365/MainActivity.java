package com.leigh365;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.leigh365.module.ShareModule;
import com.umeng.socialize.UMShareAPI;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "leigh365";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ShareModule.initActivity(this);
    }
}
