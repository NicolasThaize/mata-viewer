window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  defaultDataSourceName: 'dicomweb',
  oidc: [
    {
      authority: 'https://dev-q7f0rg3v85kbea4g.us.auth0.com/',
      client_id: 'zBS2UutmiFTTZA9bwITvZtS7Jnnz89l1',
      redirect_uri: '/callback',
      response_type: 'id_token token',
      scope: 'openid profile email',
      // ~ OPTIONAL
      //post_logout_redirect_uri: '/logout-redirect.html',
      //revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
      automaticSilentRenew: true,
      //revokeAccessTokenOnSignout: true,
    },
  ],
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Orthanc Server',
        name: 'Orthanc',
        wadoUriRoot: 'https://viewer.smart-mata.com/pacs/dicom-web',
        qidoRoot: 'https://viewer.smart-mata.com/pacs/dicom-web',
        wadoRoot: 'https://viewer.smart-mata.com/pacs/dicom-web',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        dicomUploadEnabled: true,
        bulkDataURI: {
          enabled: true,
        },
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
};
