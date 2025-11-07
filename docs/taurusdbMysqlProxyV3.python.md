# `taurusdbMysqlProxyV3` Submodule <a name="`taurusdbMysqlProxyV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlProxyV3 <a name="TaurusdbMysqlProxyV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3 opentelekomcloud_taurusdb_mysql_proxy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flavor: str,
  instance_id: str,
  node_num: typing.Union[int, float],
  id: str = None,
  master_node_weight: TaurusdbMysqlProxyV3MasterNodeWeight = None,
  proxy_mode: str = None,
  proxy_name: str = None,
  readonly_nodes_weight: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight] = None,
  timeouts: TaurusdbMysqlProxyV3Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.masterNodeWeight">master_node_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | master_node_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.proxyMode">proxy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.proxyName">proxy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.readonlyNodesWeight">readonly_nodes_weight</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]</code> | readonly_nodes_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}.

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.nodeNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master_node_weight`<sup>Optional</sup> <a name="master_node_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.masterNodeWeight"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

master_node_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#master_node_weight TaurusdbMysqlProxyV3#master_node_weight}

---

##### `proxy_mode`<sup>Optional</sup> <a name="proxy_mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.proxyMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}.

---

##### `proxy_name`<sup>Optional</sup> <a name="proxy_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.proxyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}.

---

##### `readonly_nodes_weight`<sup>Optional</sup> <a name="readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.readonlyNodesWeight"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]

readonly_nodes_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#readonly_nodes_weight TaurusdbMysqlProxyV3#readonly_nodes_weight}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#timeouts TaurusdbMysqlProxyV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight">put_master_node_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight">put_readonly_nodes_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight">reset_master_node_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode">reset_proxy_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName">reset_proxy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight">reset_readonly_nodes_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_master_node_weight` <a name="put_master_node_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight"></a>

```python
def put_master_node_weight(
  id: str,
  weight: typing.Union[int, float]
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

##### `put_readonly_nodes_weight` <a name="put_readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight"></a>

```python
def put_readonly_nodes_weight(
  value: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master_node_weight` <a name="reset_master_node_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight"></a>

```python
def reset_master_node_weight() -> None
```

##### `reset_proxy_mode` <a name="reset_proxy_mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode"></a>

```python
def reset_proxy_mode() -> None
```

##### `reset_proxy_name` <a name="reset_proxy_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName"></a>

```python
def reset_proxy_name() -> None
```

##### `reset_readonly_nodes_weight` <a name="reset_readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight"></a>

```python
def reset_readonly_nodes_weight() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TaurusdbMysqlProxyV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TaurusdbMysqlProxyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlProxyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight">master_node_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight">readonly_nodes_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput">master_node_weight_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput">node_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput">proxy_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput">proxy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput">readonly_nodes_weight_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode">proxy_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName">proxy_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `master_node_weight`<sup>Required</sup> <a name="master_node_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight"></a>

```python
master_node_weight: TaurusdbMysqlProxyV3MasterNodeWeightOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes"></a>

```python
nodes: TaurusdbMysqlProxyV3NodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `readonly_nodes_weight`<sup>Required</sup> <a name="readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight"></a>

```python
readonly_nodes_weight: TaurusdbMysqlProxyV3ReadonlyNodesWeightList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts"></a>

```python
timeouts: TaurusdbMysqlProxyV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a>

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `master_node_weight_input`<sup>Optional</sup> <a name="master_node_weight_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput"></a>

```python
master_node_weight_input: TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---

##### `node_num_input`<sup>Optional</sup> <a name="node_num_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput"></a>

```python
node_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_mode_input`<sup>Optional</sup> <a name="proxy_mode_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput"></a>

```python
proxy_mode_input: str
```

- *Type:* str

---

##### `proxy_name_input`<sup>Optional</sup> <a name="proxy_name_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput"></a>

```python
proxy_name_input: str
```

- *Type:* str

---

##### `readonly_nodes_weight_input`<sup>Optional</sup> <a name="readonly_nodes_weight_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput"></a>

```python
readonly_nodes_weight_input: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | TaurusdbMysqlProxyV3Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_mode`<sup>Required</sup> <a name="proxy_mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode"></a>

```python
proxy_mode: str
```

- *Type:* str

---

##### `proxy_name`<sup>Required</sup> <a name="proxy_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName"></a>

```python
proxy_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlProxyV3Config <a name="TaurusdbMysqlProxyV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flavor: str,
  instance_id: str,
  node_num: typing.Union[int, float],
  id: str = None,
  master_node_weight: TaurusdbMysqlProxyV3MasterNodeWeight = None,
  proxy_mode: str = None,
  proxy_name: str = None,
  readonly_nodes_weight: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight] = None,
  timeouts: TaurusdbMysqlProxyV3Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight">master_node_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | master_node_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode">proxy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName">proxy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight">readonly_nodes_weight</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]</code> | readonly_nodes_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}.

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master_node_weight`<sup>Optional</sup> <a name="master_node_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight"></a>

```python
master_node_weight: TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

master_node_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#master_node_weight TaurusdbMysqlProxyV3#master_node_weight}

---

##### `proxy_mode`<sup>Optional</sup> <a name="proxy_mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode"></a>

```python
proxy_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}.

---

##### `proxy_name`<sup>Optional</sup> <a name="proxy_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName"></a>

```python
proxy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}.

---

##### `readonly_nodes_weight`<sup>Optional</sup> <a name="readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight"></a>

```python
readonly_nodes_weight: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]

readonly_nodes_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#readonly_nodes_weight TaurusdbMysqlProxyV3#readonly_nodes_weight}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts"></a>

```python
timeouts: TaurusdbMysqlProxyV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#timeouts TaurusdbMysqlProxyV3#timeouts}

---

### TaurusdbMysqlProxyV3MasterNodeWeight <a name="TaurusdbMysqlProxyV3MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight(
  id: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Nodes <a name="TaurusdbMysqlProxyV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes()
```


### TaurusdbMysqlProxyV3ReadonlyNodesWeight <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight(
  id: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Timeouts <a name="TaurusdbMysqlProxyV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlProxyV3MasterNodeWeightOutputReference <a name="TaurusdbMysqlProxyV3MasterNodeWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue"></a>

```python
internal_value: TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---


### TaurusdbMysqlProxyV3NodesList <a name="TaurusdbMysqlProxyV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TaurusdbMysqlProxyV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### TaurusdbMysqlProxyV3NodesOutputReference <a name="TaurusdbMysqlProxyV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode">az_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag">frozen_flag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `az_code`<sup>Required</sup> <a name="az_code" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode"></a>

```python
az_code: str
```

- *Type:* str

---

##### `frozen_flag`<sup>Required</sup> <a name="frozen_flag" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag"></a>

```python
frozen_flag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue"></a>

```python
internal_value: TaurusdbMysqlProxyV3Nodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a>

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightList <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TaurusdbMysqlProxyV3ReadonlyNodesWeight]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>]

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TaurusdbMysqlProxyV3ReadonlyNodesWeight
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>

---


### TaurusdbMysqlProxyV3TimeoutsOutputReference <a name="TaurusdbMysqlProxyV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import taurusdb_mysql_proxy_v3

taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TaurusdbMysqlProxyV3Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---



