package com.leigh365.module;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.umeng.socialize.ShareAction;
import com.umeng.socialize.UMAuthListener;
import com.umeng.socialize.UMShareAPI;
import com.umeng.socialize.UMShareListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import com.umeng.socialize.media.UMImage;
import com.umeng.socialize.media.UMWeb;

import java.util.Map;


public class ShareModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private Context context;
    private static Activity mActivity;
    private static Handler mHandler = new Handler(Looper.getMainLooper());

    public static void initActivity(Activity activity) {
        mActivity = activity;
    }

    public ShareModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    private static void runOnMainThread(Runnable task) {
        mHandler.post(task);
    }

    @Override
    public String getName() {
        return "sharemodule";
    }

    /**
     * @param title
     * @param description
     * @param contentUrl
     * @param imgUrl
     * @param platform
     * @param resultCallback
     */
    @ReactMethod
    public void share(String title, String description, String contentUrl, String imgUrl,final int platform,
                      final Callback resultCallback) {
        final SHARE_MEDIA sharePlatform = getSharePlatform(platform);
        if(UMShareAPI.get(mActivity).isInstall(mActivity, sharePlatform)) {
            final UMWeb web = new UMWeb(contentUrl);
            web.setTitle(title);
            web.setThumb(new UMImage(context, imgUrl));
            web.setDescription(description);
            runOnMainThread(new Runnable() {
                @Override
                public void run() {
                    new ShareAction(mActivity)
                            .setPlatform(sharePlatform)
                            .withMedia(web)
                            .setCallback(new UMShareListener() {
                                @Override
                                public void onStart(SHARE_MEDIA share_media) {

                                }

                                @Override
                                public void onResult(SHARE_MEDIA share_media) {
                                    resultCallback.invoke("share success");
                                }

                                @Override
                                public void onError(SHARE_MEDIA share_media, Throwable throwable) {
                                    resultCallback.invoke("share failed: " + throwable.getMessage());
                                }

                                @Override
                                public void onCancel(SHARE_MEDIA share_media) {
                                    resultCallback.invoke("cancle share");
                                }
                            })
                            .share();
                }
            });
        } else {
            resultCallback.invoke("not install app");
        }
    }

    /**
     */
    @ReactMethod
    public void authLogin(int platform, final Callback resultCallback) {

        final WritableMap result = new WritableNativeMap();
        final SHARE_MEDIA sharePlatform = getSharePlatform(platform);

        if(UMShareAPI.get(mActivity).isInstall(mActivity, sharePlatform)) {
            runOnMainThread(new Runnable() {
                @Override
                public void run() {
                    UMShareAPI.get(mActivity).getPlatformInfo(mActivity, sharePlatform, new UMAuthListener() {
                        @Override
                        public void onStart(SHARE_MEDIA share_media) {
                        }

                        @Override
                        public void onComplete(SHARE_MEDIA share_media, int i, Map<String, String> map) {
                            /**
                             *
                             */
                            result.putInt("code", 0);
                            result.putString("userId", map.get("uid"));
                            result.putString("accessToken", map.get("accesstoken"));
                            result.putString("userName", map.get("name"));
                            result.putString("userGender", map.get("gender"));
                            result.putString("userAvatar", map.get("iconurl"));
                            resultCallback.invoke(result);
                        }

                        @Override
                        public void onError(SHARE_MEDIA share_media, int i, Throwable throwable) {
                            result.putInt("code", 1);
                            resultCallback.invoke(result);
                            Log.e("--react-native-share--","授权登录失败: " + throwable.getMessage());
                        }

                        @Override
                        public void onCancel(SHARE_MEDIA share_media, int i) {
                            result.putInt("code", 2);
                            resultCallback.invoke(result);
                            Log.e("--react-native-share--","取消授权登录: " + i);
                        }
                    });
                }
            });
        } else {
            Log.e("--react-native-share--","设备未安装App软件" );
        }

    }


    /**
     * @param activity
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        UMShareAPI.get(mActivity).onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onNewIntent(Intent intent) {
    }

    /**
     * @param platform
     * @return
     */
    private SHARE_MEDIA getSharePlatform(int platform){
        switch (platform) {
            case 0:
                return SHARE_MEDIA.QQ;
            case 1:
                return SHARE_MEDIA.SINA;
            case 2:
                return SHARE_MEDIA.WEIXIN;
            case 3:
                return SHARE_MEDIA.WEIXIN_CIRCLE;
            case 4:
                return SHARE_MEDIA.QZONE;
            case 5:
                return SHARE_MEDIA.FACEBOOK;
            default:
                return null;
        }
    }
}
