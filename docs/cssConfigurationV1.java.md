# `cssConfigurationV1` Submodule <a name="`cssConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssConfigurationV1 <a name="CssConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1 opentelekomcloud_css_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1;

CssConfigurationV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .autoCreateIndex(java.lang.String)
//  .httpCorsAllowCredentials(java.lang.String)
//  .httpCorsAllowHeaders(java.lang.String)
//  .httpCorsAllowMethods(java.lang.String)
//  .httpCorsAllowOrigin(java.lang.String)
//  .httpCorsEnabled(java.lang.String)
//  .httpCorsMaxAge(java.lang.String)
//  .id(java.lang.String)
//  .indicesQueriesCacheSize(java.lang.String)
//  .reindexRemoteWhitelist(java.lang.String)
//  .threadPoolForceMergeSize(java.lang.String)
//  .timeouts(CssConfigurationV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The CSS cluster ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.autoCreateIndex">autoCreateIndex</a></code> | <code>java.lang.String</code> | Whether to auto-create index. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowCredentials">httpCorsAllowCredentials</a></code> | <code>java.lang.String</code> | Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowHeaders">httpCorsAllowHeaders</a></code> | <code>java.lang.String</code> | Headers allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowMethods">httpCorsAllowMethods</a></code> | <code>java.lang.String</code> | Methods allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowOrigin">httpCorsAllowOrigin</a></code> | <code>java.lang.String</code> | Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsEnabled">httpCorsEnabled</a></code> | <code>java.lang.String</code> | Whether to allow cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsMaxAge">httpCorsMaxAge</a></code> | <code>java.lang.String</code> | Cache duration of the browser. The cache is automatically cleared after the time range you specify. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#id CssConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>java.lang.String</code> | Cache size in the query phase. Value range: **1** to **100**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.lang.String</code> | Configured for migrating data from the current cluster to the target cluster through the reindex API. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.String</code> | Queue size in the force merge thread pool. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The CSS cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}

---

##### `autoCreateIndex`<sup>Optional</sup> <a name="autoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.autoCreateIndex"></a>

- *Type:* java.lang.String

Whether to auto-create index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}

---

##### `httpCorsAllowCredentials`<sup>Optional</sup> <a name="httpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowCredentials"></a>

- *Type:* java.lang.String

Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}

---

##### `httpCorsAllowHeaders`<sup>Optional</sup> <a name="httpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowHeaders"></a>

- *Type:* java.lang.String

Headers allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}

---

##### `httpCorsAllowMethods`<sup>Optional</sup> <a name="httpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowMethods"></a>

- *Type:* java.lang.String

Methods allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}

---

##### `httpCorsAllowOrigin`<sup>Optional</sup> <a name="httpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowOrigin"></a>

- *Type:* java.lang.String

Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}

---

##### `httpCorsEnabled`<sup>Optional</sup> <a name="httpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsEnabled"></a>

- *Type:* java.lang.String

Whether to allow cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}

---

##### `httpCorsMaxAge`<sup>Optional</sup> <a name="httpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsMaxAge"></a>

- *Type:* java.lang.String

Cache duration of the browser. The cache is automatically cleared after the time range you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#id CssConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indicesQueriesCacheSize`<sup>Optional</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.indicesQueriesCacheSize"></a>

- *Type:* java.lang.String

Cache size in the query phase. Value range: **1** to **100**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.reindexRemoteWhitelist"></a>

- *Type:* java.lang.String

Configured for migrating data from the current cluster to the target cluster through the reindex API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.threadPoolForceMergeSize"></a>

- *Type:* java.lang.String

Queue size in the force merge thread pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex">resetAutoCreateIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials">resetHttpCorsAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders">resetHttpCorsAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods">resetHttpCorsAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin">resetHttpCorsAllowOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled">resetHttpCorsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge">resetHttpCorsMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize">resetIndicesQueriesCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist">resetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize">resetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts"></a>

```java
public void putTimeouts(CssConfigurationV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---

##### `resetAutoCreateIndex` <a name="resetAutoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex"></a>

```java
public void resetAutoCreateIndex()
```

##### `resetHttpCorsAllowCredentials` <a name="resetHttpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials"></a>

```java
public void resetHttpCorsAllowCredentials()
```

##### `resetHttpCorsAllowHeaders` <a name="resetHttpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders"></a>

```java
public void resetHttpCorsAllowHeaders()
```

##### `resetHttpCorsAllowMethods` <a name="resetHttpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods"></a>

```java
public void resetHttpCorsAllowMethods()
```

##### `resetHttpCorsAllowOrigin` <a name="resetHttpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin"></a>

```java
public void resetHttpCorsAllowOrigin()
```

##### `resetHttpCorsEnabled` <a name="resetHttpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled"></a>

```java
public void resetHttpCorsEnabled()
```

##### `resetHttpCorsMaxAge` <a name="resetHttpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge"></a>

```java
public void resetHttpCorsMaxAge()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId"></a>

```java
public void resetId()
```

##### `resetIndicesQueriesCacheSize` <a name="resetIndicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize"></a>

```java
public void resetIndicesQueriesCacheSize()
```

##### `resetReindexRemoteWhitelist` <a name="resetReindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist"></a>

```java
public void resetReindexRemoteWhitelist()
```

##### `resetThreadPoolForceMergeSize` <a name="resetThreadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize"></a>

```java
public void resetThreadPoolForceMergeSize()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1;

CssConfigurationV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1;

CssConfigurationV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1;

CssConfigurationV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1;

CssConfigurationV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CssConfigurationV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CssConfigurationV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CssConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CssConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput">autoCreateIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput">httpCorsAllowCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput">httpCorsAllowHeadersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput">httpCorsAllowMethodsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput">httpCorsAllowOriginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput">httpCorsEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput">httpCorsMaxAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput">indicesQueriesCacheSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput">reindexRemoteWhitelistInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput">threadPoolForceMergeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex">autoCreateIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials">httpCorsAllowCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders">httpCorsAllowHeaders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods">httpCorsAllowMethods</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin">httpCorsAllowOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled">httpCorsEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge">httpCorsMaxAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts"></a>

```java
public CssConfigurationV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a>

---

##### `autoCreateIndexInput`<sup>Optional</sup> <a name="autoCreateIndexInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput"></a>

```java
public java.lang.String getAutoCreateIndexInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowCredentialsInput`<sup>Optional</sup> <a name="httpCorsAllowCredentialsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput"></a>

```java
public java.lang.String getHttpCorsAllowCredentialsInput();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowHeadersInput`<sup>Optional</sup> <a name="httpCorsAllowHeadersInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput"></a>

```java
public java.lang.String getHttpCorsAllowHeadersInput();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowMethodsInput`<sup>Optional</sup> <a name="httpCorsAllowMethodsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput"></a>

```java
public java.lang.String getHttpCorsAllowMethodsInput();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowOriginInput`<sup>Optional</sup> <a name="httpCorsAllowOriginInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput"></a>

```java
public java.lang.String getHttpCorsAllowOriginInput();
```

- *Type:* java.lang.String

---

##### `httpCorsEnabledInput`<sup>Optional</sup> <a name="httpCorsEnabledInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput"></a>

```java
public java.lang.String getHttpCorsEnabledInput();
```

- *Type:* java.lang.String

---

##### `httpCorsMaxAgeInput`<sup>Optional</sup> <a name="httpCorsMaxAgeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput"></a>

```java
public java.lang.String getHttpCorsMaxAgeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indicesQueriesCacheSizeInput`<sup>Optional</sup> <a name="indicesQueriesCacheSizeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput"></a>

```java
public java.lang.String getIndicesQueriesCacheSizeInput();
```

- *Type:* java.lang.String

---

##### `reindexRemoteWhitelistInput`<sup>Optional</sup> <a name="reindexRemoteWhitelistInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput"></a>

```java
public java.lang.String getReindexRemoteWhitelistInput();
```

- *Type:* java.lang.String

---

##### `threadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="threadPoolForceMergeSizeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput"></a>

```java
public java.lang.String getThreadPoolForceMergeSizeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput"></a>

```java
public IResolvable|CssConfigurationV1Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---

##### `autoCreateIndex`<sup>Required</sup> <a name="autoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex"></a>

```java
public java.lang.String getAutoCreateIndex();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowCredentials`<sup>Required</sup> <a name="httpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials"></a>

```java
public java.lang.String getHttpCorsAllowCredentials();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowHeaders`<sup>Required</sup> <a name="httpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders"></a>

```java
public java.lang.String getHttpCorsAllowHeaders();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowMethods`<sup>Required</sup> <a name="httpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods"></a>

```java
public java.lang.String getHttpCorsAllowMethods();
```

- *Type:* java.lang.String

---

##### `httpCorsAllowOrigin`<sup>Required</sup> <a name="httpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin"></a>

```java
public java.lang.String getHttpCorsAllowOrigin();
```

- *Type:* java.lang.String

---

##### `httpCorsEnabled`<sup>Required</sup> <a name="httpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled"></a>

```java
public java.lang.String getHttpCorsEnabled();
```

- *Type:* java.lang.String

---

##### `httpCorsMaxAge`<sup>Required</sup> <a name="httpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge"></a>

```java
public java.lang.String getHttpCorsMaxAge();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indicesQueriesCacheSize`<sup>Required</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize"></a>

```java
public java.lang.String getIndicesQueriesCacheSize();
```

- *Type:* java.lang.String

---

##### `reindexRemoteWhitelist`<sup>Required</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist"></a>

```java
public java.lang.String getReindexRemoteWhitelist();
```

- *Type:* java.lang.String

---

##### `threadPoolForceMergeSize`<sup>Required</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize"></a>

```java
public java.lang.String getThreadPoolForceMergeSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CssConfigurationV1Config <a name="CssConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1Config;

CssConfigurationV1Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .autoCreateIndex(java.lang.String)
//  .httpCorsAllowCredentials(java.lang.String)
//  .httpCorsAllowHeaders(java.lang.String)
//  .httpCorsAllowMethods(java.lang.String)
//  .httpCorsAllowOrigin(java.lang.String)
//  .httpCorsEnabled(java.lang.String)
//  .httpCorsMaxAge(java.lang.String)
//  .id(java.lang.String)
//  .indicesQueriesCacheSize(java.lang.String)
//  .reindexRemoteWhitelist(java.lang.String)
//  .threadPoolForceMergeSize(java.lang.String)
//  .timeouts(CssConfigurationV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The CSS cluster ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex">autoCreateIndex</a></code> | <code>java.lang.String</code> | Whether to auto-create index. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials">httpCorsAllowCredentials</a></code> | <code>java.lang.String</code> | Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders">httpCorsAllowHeaders</a></code> | <code>java.lang.String</code> | Headers allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods">httpCorsAllowMethods</a></code> | <code>java.lang.String</code> | Methods allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin">httpCorsAllowOrigin</a></code> | <code>java.lang.String</code> | Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled">httpCorsEnabled</a></code> | <code>java.lang.String</code> | Whether to allow cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge">httpCorsMaxAge</a></code> | <code>java.lang.String</code> | Cache duration of the browser. The cache is automatically cleared after the time range you specify. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#id CssConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>java.lang.String</code> | Cache size in the query phase. Value range: **1** to **100**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.lang.String</code> | Configured for migrating data from the current cluster to the target cluster through the reindex API. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.String</code> | Queue size in the force merge thread pool. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The CSS cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}

---

##### `autoCreateIndex`<sup>Optional</sup> <a name="autoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex"></a>

```java
public java.lang.String getAutoCreateIndex();
```

- *Type:* java.lang.String

Whether to auto-create index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}

---

##### `httpCorsAllowCredentials`<sup>Optional</sup> <a name="httpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials"></a>

```java
public java.lang.String getHttpCorsAllowCredentials();
```

- *Type:* java.lang.String

Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}

---

##### `httpCorsAllowHeaders`<sup>Optional</sup> <a name="httpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders"></a>

```java
public java.lang.String getHttpCorsAllowHeaders();
```

- *Type:* java.lang.String

Headers allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}

---

##### `httpCorsAllowMethods`<sup>Optional</sup> <a name="httpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods"></a>

```java
public java.lang.String getHttpCorsAllowMethods();
```

- *Type:* java.lang.String

Methods allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}

---

##### `httpCorsAllowOrigin`<sup>Optional</sup> <a name="httpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin"></a>

```java
public java.lang.String getHttpCorsAllowOrigin();
```

- *Type:* java.lang.String

Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}

---

##### `httpCorsEnabled`<sup>Optional</sup> <a name="httpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled"></a>

```java
public java.lang.String getHttpCorsEnabled();
```

- *Type:* java.lang.String

Whether to allow cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}

---

##### `httpCorsMaxAge`<sup>Optional</sup> <a name="httpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge"></a>

```java
public java.lang.String getHttpCorsMaxAge();
```

- *Type:* java.lang.String

Cache duration of the browser. The cache is automatically cleared after the time range you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#id CssConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indicesQueriesCacheSize`<sup>Optional</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize"></a>

```java
public java.lang.String getIndicesQueriesCacheSize();
```

- *Type:* java.lang.String

Cache size in the query phase. Value range: **1** to **100**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist"></a>

```java
public java.lang.String getReindexRemoteWhitelist();
```

- *Type:* java.lang.String

Configured for migrating data from the current cluster to the target cluster through the reindex API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize"></a>

```java
public java.lang.String getThreadPoolForceMergeSize();
```

- *Type:* java.lang.String

Queue size in the force merge thread pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts"></a>

```java
public CssConfigurationV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}

---

### CssConfigurationV1Timeouts <a name="CssConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1Timeouts;

CssConfigurationV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#create CssConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#create CssConfigurationV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssConfigurationV1TimeoutsOutputReference <a name="CssConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_configuration_v1.CssConfigurationV1TimeoutsOutputReference;

new CssConfigurationV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CssConfigurationV1Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---



