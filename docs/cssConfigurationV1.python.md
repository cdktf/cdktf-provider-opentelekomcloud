# `cssConfigurationV1` Submodule <a name="`cssConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssConfigurationV1 <a name="CssConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1 opentelekomcloud_css_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  auto_create_index: str = None,
  http_cors_allow_credentials: str = None,
  http_cors_allow_headers: str = None,
  http_cors_allow_methods: str = None,
  http_cors_allow_origin: str = None,
  http_cors_enabled: str = None,
  http_cors_max_age: str = None,
  id: str = None,
  indices_queries_cache_size: str = None,
  reindex_remote_whitelist: str = None,
  thread_pool_force_merge_size: str = None,
  timeouts: CssConfigurationV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The CSS cluster ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.autoCreateIndex">auto_create_index</a></code> | <code>str</code> | Whether to auto-create index. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowCredentials">http_cors_allow_credentials</a></code> | <code>str</code> | Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowHeaders">http_cors_allow_headers</a></code> | <code>str</code> | Headers allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowMethods">http_cors_allow_methods</a></code> | <code>str</code> | Methods allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowOrigin">http_cors_allow_origin</a></code> | <code>str</code> | Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsEnabled">http_cors_enabled</a></code> | <code>str</code> | Whether to allow cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsMaxAge">http_cors_max_age</a></code> | <code>str</code> | Cache duration of the browser. The cache is automatically cleared after the time range you specify. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#id CssConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.indicesQueriesCacheSize">indices_queries_cache_size</a></code> | <code>str</code> | Cache size in the query phase. Value range: **1** to **100**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>str</code> | Configured for migrating data from the current cluster to the target cluster through the reindex API. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>str</code> | Queue size in the force merge thread pool. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.clusterId"></a>

- *Type:* str

The CSS cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}

---

##### `auto_create_index`<sup>Optional</sup> <a name="auto_create_index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.autoCreateIndex"></a>

- *Type:* str

Whether to auto-create index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}

---

##### `http_cors_allow_credentials`<sup>Optional</sup> <a name="http_cors_allow_credentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowCredentials"></a>

- *Type:* str

Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}

---

##### `http_cors_allow_headers`<sup>Optional</sup> <a name="http_cors_allow_headers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowHeaders"></a>

- *Type:* str

Headers allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}

---

##### `http_cors_allow_methods`<sup>Optional</sup> <a name="http_cors_allow_methods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowMethods"></a>

- *Type:* str

Methods allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}

---

##### `http_cors_allow_origin`<sup>Optional</sup> <a name="http_cors_allow_origin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsAllowOrigin"></a>

- *Type:* str

Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}

---

##### `http_cors_enabled`<sup>Optional</sup> <a name="http_cors_enabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsEnabled"></a>

- *Type:* str

Whether to allow cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}

---

##### `http_cors_max_age`<sup>Optional</sup> <a name="http_cors_max_age" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.httpCorsMaxAge"></a>

- *Type:* str

Cache duration of the browser. The cache is automatically cleared after the time range you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#id CssConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices_queries_cache_size`<sup>Optional</sup> <a name="indices_queries_cache_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.indicesQueriesCacheSize"></a>

- *Type:* str

Cache size in the query phase. Value range: **1** to **100**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}

---

##### `reindex_remote_whitelist`<sup>Optional</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.reindexRemoteWhitelist"></a>

- *Type:* str

Configured for migrating data from the current cluster to the target cluster through the reindex API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}

---

##### `thread_pool_force_merge_size`<sup>Optional</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.threadPoolForceMergeSize"></a>

- *Type:* str

Queue size in the force merge thread pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex">reset_auto_create_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials">reset_http_cors_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders">reset_http_cors_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods">reset_http_cors_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin">reset_http_cors_allow_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled">reset_http_cors_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge">reset_http_cors_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize">reset_indices_queries_cache_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist">reset_reindex_remote_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize">reset_thread_pool_force_merge_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#create CssConfigurationV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}.

---

##### `reset_auto_create_index` <a name="reset_auto_create_index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex"></a>

```python
def reset_auto_create_index() -> None
```

##### `reset_http_cors_allow_credentials` <a name="reset_http_cors_allow_credentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials"></a>

```python
def reset_http_cors_allow_credentials() -> None
```

##### `reset_http_cors_allow_headers` <a name="reset_http_cors_allow_headers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders"></a>

```python
def reset_http_cors_allow_headers() -> None
```

##### `reset_http_cors_allow_methods` <a name="reset_http_cors_allow_methods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods"></a>

```python
def reset_http_cors_allow_methods() -> None
```

##### `reset_http_cors_allow_origin` <a name="reset_http_cors_allow_origin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin"></a>

```python
def reset_http_cors_allow_origin() -> None
```

##### `reset_http_cors_enabled` <a name="reset_http_cors_enabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled"></a>

```python
def reset_http_cors_enabled() -> None
```

##### `reset_http_cors_max_age` <a name="reset_http_cors_max_age" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge"></a>

```python
def reset_http_cors_max_age() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_indices_queries_cache_size` <a name="reset_indices_queries_cache_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize"></a>

```python
def reset_indices_queries_cache_size() -> None
```

##### `reset_reindex_remote_whitelist` <a name="reset_reindex_remote_whitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist"></a>

```python
def reset_reindex_remote_whitelist() -> None
```

##### `reset_thread_pool_force_merge_size` <a name="reset_thread_pool_force_merge_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize"></a>

```python
def reset_thread_pool_force_merge_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CssConfigurationV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CssConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CssConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput">auto_create_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput">http_cors_allow_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput">http_cors_allow_headers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput">http_cors_allow_methods_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput">http_cors_allow_origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput">http_cors_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput">http_cors_max_age_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput">indices_queries_cache_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput">reindex_remote_whitelist_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput">thread_pool_force_merge_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex">auto_create_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials">http_cors_allow_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders">http_cors_allow_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods">http_cors_allow_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin">http_cors_allow_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled">http_cors_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge">http_cors_max_age</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize">indices_queries_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts"></a>

```python
timeouts: CssConfigurationV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a>

---

##### `auto_create_index_input`<sup>Optional</sup> <a name="auto_create_index_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput"></a>

```python
auto_create_index_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `http_cors_allow_credentials_input`<sup>Optional</sup> <a name="http_cors_allow_credentials_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput"></a>

```python
http_cors_allow_credentials_input: str
```

- *Type:* str

---

##### `http_cors_allow_headers_input`<sup>Optional</sup> <a name="http_cors_allow_headers_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput"></a>

```python
http_cors_allow_headers_input: str
```

- *Type:* str

---

##### `http_cors_allow_methods_input`<sup>Optional</sup> <a name="http_cors_allow_methods_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput"></a>

```python
http_cors_allow_methods_input: str
```

- *Type:* str

---

##### `http_cors_allow_origin_input`<sup>Optional</sup> <a name="http_cors_allow_origin_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput"></a>

```python
http_cors_allow_origin_input: str
```

- *Type:* str

---

##### `http_cors_enabled_input`<sup>Optional</sup> <a name="http_cors_enabled_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput"></a>

```python
http_cors_enabled_input: str
```

- *Type:* str

---

##### `http_cors_max_age_input`<sup>Optional</sup> <a name="http_cors_max_age_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput"></a>

```python
http_cors_max_age_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `indices_queries_cache_size_input`<sup>Optional</sup> <a name="indices_queries_cache_size_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput"></a>

```python
indices_queries_cache_size_input: str
```

- *Type:* str

---

##### `reindex_remote_whitelist_input`<sup>Optional</sup> <a name="reindex_remote_whitelist_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput"></a>

```python
reindex_remote_whitelist_input: str
```

- *Type:* str

---

##### `thread_pool_force_merge_size_input`<sup>Optional</sup> <a name="thread_pool_force_merge_size_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput"></a>

```python
thread_pool_force_merge_size_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CssConfigurationV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>]

---

##### `auto_create_index`<sup>Required</sup> <a name="auto_create_index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex"></a>

```python
auto_create_index: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `http_cors_allow_credentials`<sup>Required</sup> <a name="http_cors_allow_credentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials"></a>

```python
http_cors_allow_credentials: str
```

- *Type:* str

---

##### `http_cors_allow_headers`<sup>Required</sup> <a name="http_cors_allow_headers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders"></a>

```python
http_cors_allow_headers: str
```

- *Type:* str

---

##### `http_cors_allow_methods`<sup>Required</sup> <a name="http_cors_allow_methods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods"></a>

```python
http_cors_allow_methods: str
```

- *Type:* str

---

##### `http_cors_allow_origin`<sup>Required</sup> <a name="http_cors_allow_origin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin"></a>

```python
http_cors_allow_origin: str
```

- *Type:* str

---

##### `http_cors_enabled`<sup>Required</sup> <a name="http_cors_enabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled"></a>

```python
http_cors_enabled: str
```

- *Type:* str

---

##### `http_cors_max_age`<sup>Required</sup> <a name="http_cors_max_age" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge"></a>

```python
http_cors_max_age: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `indices_queries_cache_size`<sup>Required</sup> <a name="indices_queries_cache_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize"></a>

```python
indices_queries_cache_size: str
```

- *Type:* str

---

##### `reindex_remote_whitelist`<sup>Required</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist"></a>

```python
reindex_remote_whitelist: str
```

- *Type:* str

---

##### `thread_pool_force_merge_size`<sup>Required</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize"></a>

```python
thread_pool_force_merge_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CssConfigurationV1Config <a name="CssConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  auto_create_index: str = None,
  http_cors_allow_credentials: str = None,
  http_cors_allow_headers: str = None,
  http_cors_allow_methods: str = None,
  http_cors_allow_origin: str = None,
  http_cors_enabled: str = None,
  http_cors_max_age: str = None,
  id: str = None,
  indices_queries_cache_size: str = None,
  reindex_remote_whitelist: str = None,
  thread_pool_force_merge_size: str = None,
  timeouts: CssConfigurationV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId">cluster_id</a></code> | <code>str</code> | The CSS cluster ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex">auto_create_index</a></code> | <code>str</code> | Whether to auto-create index. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials">http_cors_allow_credentials</a></code> | <code>str</code> | Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders">http_cors_allow_headers</a></code> | <code>str</code> | Headers allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods">http_cors_allow_methods</a></code> | <code>str</code> | Methods allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin">http_cors_allow_origin</a></code> | <code>str</code> | Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled">http_cors_enabled</a></code> | <code>str</code> | Whether to allow cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge">http_cors_max_age</a></code> | <code>str</code> | Cache duration of the browser. The cache is automatically cleared after the time range you specify. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#id CssConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize">indices_queries_cache_size</a></code> | <code>str</code> | Cache size in the query phase. Value range: **1** to **100**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist">reindex_remote_whitelist</a></code> | <code>str</code> | Configured for migrating data from the current cluster to the target cluster through the reindex API. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize">thread_pool_force_merge_size</a></code> | <code>str</code> | Queue size in the force merge thread pool. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The CSS cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}

---

##### `auto_create_index`<sup>Optional</sup> <a name="auto_create_index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex"></a>

```python
auto_create_index: str
```

- *Type:* str

Whether to auto-create index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}

---

##### `http_cors_allow_credentials`<sup>Optional</sup> <a name="http_cors_allow_credentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials"></a>

```python
http_cors_allow_credentials: str
```

- *Type:* str

Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}

---

##### `http_cors_allow_headers`<sup>Optional</sup> <a name="http_cors_allow_headers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders"></a>

```python
http_cors_allow_headers: str
```

- *Type:* str

Headers allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}

---

##### `http_cors_allow_methods`<sup>Optional</sup> <a name="http_cors_allow_methods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods"></a>

```python
http_cors_allow_methods: str
```

- *Type:* str

Methods allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}

---

##### `http_cors_allow_origin`<sup>Optional</sup> <a name="http_cors_allow_origin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin"></a>

```python
http_cors_allow_origin: str
```

- *Type:* str

Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}

---

##### `http_cors_enabled`<sup>Optional</sup> <a name="http_cors_enabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled"></a>

```python
http_cors_enabled: str
```

- *Type:* str

Whether to allow cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}

---

##### `http_cors_max_age`<sup>Optional</sup> <a name="http_cors_max_age" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge"></a>

```python
http_cors_max_age: str
```

- *Type:* str

Cache duration of the browser. The cache is automatically cleared after the time range you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#id CssConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices_queries_cache_size`<sup>Optional</sup> <a name="indices_queries_cache_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize"></a>

```python
indices_queries_cache_size: str
```

- *Type:* str

Cache size in the query phase. Value range: **1** to **100**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}

---

##### `reindex_remote_whitelist`<sup>Optional</sup> <a name="reindex_remote_whitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist"></a>

```python
reindex_remote_whitelist: str
```

- *Type:* str

Configured for migrating data from the current cluster to the target cluster through the reindex API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}

---

##### `thread_pool_force_merge_size`<sup>Optional</sup> <a name="thread_pool_force_merge_size" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize"></a>

```python
thread_pool_force_merge_size: str
```

- *Type:* str

Queue size in the force merge thread pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts"></a>

```python
timeouts: CssConfigurationV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}

---

### CssConfigurationV1Timeouts <a name="CssConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#create CssConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#create CssConfigurationV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssConfigurationV1TimeoutsOutputReference <a name="CssConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_configuration_v1

cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CssConfigurationV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>]

---



