# `ltsHostAccessV3` Submodule <a name="`ltsHostAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsHostAccessV3 <a name="LtsHostAccessV3" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3 opentelekomcloud_lts_host_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_config: LtsHostAccessV3AccessConfig,
  log_group_id: str,
  log_stream_id: str,
  name: str,
  binary_collect: bool | IResolvable = None,
  host_group_ids: typing.List[str] = None,
  id: str = None,
  log_split: bool | IResolvable = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logStreamId">log_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.binaryCollect">binary_collect</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.hostGroupIds">host_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logSplit">log_split</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}.

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logStreamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}.

---

##### `binary_collect`<sup>Optional</sup> <a name="binary_collect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.binaryCollect"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}.

---

##### `host_group_ids`<sup>Optional</sup> <a name="host_group_ids" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.hostGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_split`<sup>Optional</sup> <a name="log_split" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logSplit"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect">reset_binary_collect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds">reset_host_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit">reset_log_split</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig"></a>

```python
def put_access_config(
  paths: typing.List[str],
  black_paths: typing.List[str] = None,
  multi_log_format: LtsHostAccessV3AccessConfigMultiLogFormat = None,
  single_log_format: LtsHostAccessV3AccessConfigSingleLogFormat = None,
  windows_log_info: LtsHostAccessV3AccessConfigWindowsLogInfo = None
) -> None
```

###### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.paths"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}.

---

###### `black_paths`<sup>Optional</sup> <a name="black_paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.blackPaths"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}.

---

###### `multi_log_format`<sup>Optional</sup> <a name="multi_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.multiLogFormat"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#multi_log_format LtsHostAccessV3#multi_log_format}

---

###### `single_log_format`<sup>Optional</sup> <a name="single_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.singleLogFormat"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#single_log_format LtsHostAccessV3#single_log_format}

---

###### `windows_log_info`<sup>Optional</sup> <a name="windows_log_info" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.windowsLogInfo"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

windows_log_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#windows_log_info LtsHostAccessV3#windows_log_info}

---

##### `reset_binary_collect` <a name="reset_binary_collect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect"></a>

```python
def reset_binary_collect() -> None
```

##### `reset_host_group_ids` <a name="reset_host_group_ids" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds"></a>

```python
def reset_host_group_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_split` <a name="reset_log_split" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit"></a>

```python
def reset_log_split() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LtsHostAccessV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LtsHostAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LtsHostAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName">log_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput">access_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput">binary_collect_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput">host_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput">log_split_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput">log_stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect">binary_collect</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds">host_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit">log_split</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId">log_stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig"></a>

```python
access_config: LtsHostAccessV3AccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a>

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput"></a>

```python
access_config_input: LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---

##### `binary_collect_input`<sup>Optional</sup> <a name="binary_collect_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput"></a>

```python
binary_collect_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_group_ids_input`<sup>Optional</sup> <a name="host_group_ids_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput"></a>

```python
host_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_split_input`<sup>Optional</sup> <a name="log_split_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput"></a>

```python
log_split_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_stream_id_input`<sup>Optional</sup> <a name="log_stream_id_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput"></a>

```python
log_stream_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `binary_collect`<sup>Required</sup> <a name="binary_collect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect"></a>

```python
binary_collect: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_group_ids`<sup>Required</sup> <a name="host_group_ids" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds"></a>

```python
host_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_split`<sup>Required</sup> <a name="log_split" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit"></a>

```python
log_split: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId"></a>

```python
log_stream_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LtsHostAccessV3AccessConfig <a name="LtsHostAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfig(
  paths: typing.List[str],
  black_paths: typing.List[str] = None,
  multi_log_format: LtsHostAccessV3AccessConfigMultiLogFormat = None,
  single_log_format: LtsHostAccessV3AccessConfigSingleLogFormat = None,
  windows_log_info: LtsHostAccessV3AccessConfigWindowsLogInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths">paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths">black_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat">multi_log_format</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat">single_log_format</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo">windows_log_info</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | windows_log_info block. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}.

---

##### `black_paths`<sup>Optional</sup> <a name="black_paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths"></a>

```python
black_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}.

---

##### `multi_log_format`<sup>Optional</sup> <a name="multi_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat"></a>

```python
multi_log_format: LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#multi_log_format LtsHostAccessV3#multi_log_format}

---

##### `single_log_format`<sup>Optional</sup> <a name="single_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat"></a>

```python
single_log_format: LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#single_log_format LtsHostAccessV3#single_log_format}

---

##### `windows_log_info`<sup>Optional</sup> <a name="windows_log_info" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo"></a>

```python
windows_log_info: LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

windows_log_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#windows_log_info LtsHostAccessV3#windows_log_info}

---

### LtsHostAccessV3AccessConfigMultiLogFormat <a name="LtsHostAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat(
  mode: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigSingleLogFormat <a name="LtsHostAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat(
  mode: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigWindowsLogInfo <a name="LtsHostAccessV3AccessConfigWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo(
  categories: typing.List[str],
  event_level: typing.List[str],
  time_offset: typing.Union[int, float],
  time_offset_unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories">categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel">event_level</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset">time_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit">time_offset_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}. |

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}.

---

##### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel"></a>

```python
event_level: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}.

---

##### `time_offset`<sup>Required</sup> <a name="time_offset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset"></a>

```python
time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}.

---

##### `time_offset_unit`<sup>Required</sup> <a name="time_offset_unit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit"></a>

```python
time_offset_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}.

---

### LtsHostAccessV3Config <a name="LtsHostAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_config: LtsHostAccessV3AccessConfig,
  log_group_id: str,
  log_stream_id: str,
  name: str,
  binary_collect: bool | IResolvable = None,
  host_group_ids: typing.List[str] = None,
  id: str = None,
  log_split: bool | IResolvable = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId">log_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect">binary_collect</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds">host_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit">log_split</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig"></a>

```python
access_config: LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}.

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId"></a>

```python
log_stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}.

---

##### `binary_collect`<sup>Optional</sup> <a name="binary_collect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect"></a>

```python
binary_collect: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}.

---

##### `host_group_ids`<sup>Optional</sup> <a name="host_group_ids" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds"></a>

```python
host_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_split`<sup>Optional</sup> <a name="log_split" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit"></a>

```python
log_split: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsHostAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```python
internal_value: LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---


### LtsHostAccessV3AccessConfigOutputReference <a name="LtsHostAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat">put_multi_log_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat">put_single_log_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo">put_windows_log_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths">reset_black_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat">reset_multi_log_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat">reset_single_log_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo">reset_windows_log_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_log_format` <a name="put_multi_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```python
def put_multi_log_format(
  mode: str,
  value: str = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

##### `put_single_log_format` <a name="put_single_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```python
def put_single_log_format(
  mode: str,
  value: str = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

##### `put_windows_log_info` <a name="put_windows_log_info" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo"></a>

```python
def put_windows_log_info(
  categories: typing.List[str],
  event_level: typing.List[str],
  time_offset: typing.Union[int, float],
  time_offset_unit: str
) -> None
```

###### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.categories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}.

---

###### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.eventLevel"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}.

---

###### `time_offset`<sup>Required</sup> <a name="time_offset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.timeOffset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}.

---

###### `time_offset_unit`<sup>Required</sup> <a name="time_offset_unit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.timeOffsetUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}.

---

##### `reset_black_paths` <a name="reset_black_paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```python
def reset_black_paths() -> None
```

##### `reset_multi_log_format` <a name="reset_multi_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```python
def reset_multi_log_format() -> None
```

##### `reset_single_log_format` <a name="reset_single_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```python
def reset_single_log_format() -> None
```

##### `reset_windows_log_info` <a name="reset_windows_log_info" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo"></a>

```python
def reset_windows_log_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat">multi_log_format</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat">single_log_format</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo">windows_log_info</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput">black_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput">multi_log_format_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput">single_log_format_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput">windows_log_info_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths">black_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_log_format`<sup>Required</sup> <a name="multi_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```python
multi_log_format: LtsHostAccessV3AccessConfigMultiLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `single_log_format`<sup>Required</sup> <a name="single_log_format" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```python
single_log_format: LtsHostAccessV3AccessConfigSingleLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `windows_log_info`<sup>Required</sup> <a name="windows_log_info" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo"></a>

```python
windows_log_info: LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a>

---

##### `black_paths_input`<sup>Optional</sup> <a name="black_paths_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```python
black_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_log_format_input`<sup>Optional</sup> <a name="multi_log_format_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```python
multi_log_format_input: LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `single_log_format_input`<sup>Optional</sup> <a name="single_log_format_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```python
single_log_format_input: LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---

##### `windows_log_info_input`<sup>Optional</sup> <a name="windows_log_info_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput"></a>

```python
windows_log_info_input: LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---

##### `black_paths`<sup>Required</sup> <a name="black_paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```python
black_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---


### LtsHostAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```python
internal_value: LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---


### LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference <a name="LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_host_access_v3

ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput">event_level_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput">time_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput">time_offset_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel">event_level</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset">time_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit">time_offset_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_level_input`<sup>Optional</sup> <a name="event_level_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput"></a>

```python
event_level_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_offset_input`<sup>Optional</sup> <a name="time_offset_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput"></a>

```python
time_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_offset_unit_input`<sup>Optional</sup> <a name="time_offset_unit_input" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput"></a>

```python
time_offset_unit_input: str
```

- *Type:* str

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel"></a>

```python
event_level: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_offset`<sup>Required</sup> <a name="time_offset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset"></a>

```python
time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_offset_unit`<sup>Required</sup> <a name="time_offset_unit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit"></a>

```python
time_offset_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue"></a>

```python
internal_value: LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---



