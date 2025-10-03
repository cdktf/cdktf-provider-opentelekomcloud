# `ddmSchemaV1` Submodule <a name="`ddmSchemaV1` Submodule" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DdmSchemaV1 <a name="DdmSchemaV1" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1 opentelekomcloud_ddm_schema_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  rds: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]],
  shard_mode: str,
  shard_number: typing.Union[int, float],
  id: str = None,
  purge_rds_on_delete: typing.Union[bool, IResolvable] = None,
  shard_unit: typing.Union[int, float] = None,
  timeouts: DdmSchemaV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#instance_id DdmSchemaV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#name DdmSchemaV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.rds">rds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]</code> | rds block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardMode">shard_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_mode DdmSchemaV1#shard_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardNumber">shard_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_number DdmSchemaV1#shard_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.purgeRdsOnDelete">purge_rds_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#purge_rds_on_delete DdmSchemaV1#purge_rds_on_delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardUnit">shard_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_unit DdmSchemaV1#shard_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#instance_id DdmSchemaV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#name DdmSchemaV1#name}.

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.rds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]

rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#rds DdmSchemaV1#rds}

---

##### `shard_mode`<sup>Required</sup> <a name="shard_mode" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_mode DdmSchemaV1#shard_mode}.

---

##### `shard_number`<sup>Required</sup> <a name="shard_number" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_number DdmSchemaV1#shard_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purge_rds_on_delete`<sup>Optional</sup> <a name="purge_rds_on_delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.purgeRdsOnDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#purge_rds_on_delete DdmSchemaV1#purge_rds_on_delete}.

---

##### `shard_unit`<sup>Optional</sup> <a name="shard_unit" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.shardUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_unit DdmSchemaV1#shard_unit}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#timeouts DdmSchemaV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putRds">put_rds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetPurgeRdsOnDelete">reset_purge_rds_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetShardUnit">reset_shard_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rds` <a name="put_rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putRds"></a>

```python
def put_rds(
  value: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putRds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#create DdmSchemaV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#delete DdmSchemaV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#update DdmSchemaV1#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_purge_rds_on_delete` <a name="reset_purge_rds_on_delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetPurgeRdsOnDelete"></a>

```python
def reset_purge_rds_on_delete() -> None
```

##### `reset_shard_unit` <a name="reset_shard_unit" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetShardUnit"></a>

```python
def reset_shard_unit() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DdmSchemaV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DdmSchemaV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DdmSchemaV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DdmSchemaV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DdmSchemaV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.databases">databases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList">DdmSchemaV1DatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.dataVips">data_vips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList">DdmSchemaV1RdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference">DdmSchemaV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.usedRds">used_rds</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList">DdmSchemaV1UsedRdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.purgeRdsOnDeleteInput">purge_rds_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.rdsInput">rds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardModeInput">shard_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardNumberInput">shard_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardUnitInput">shard_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.purgeRdsOnDelete">purge_rds_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardMode">shard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardNumber">shard_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardUnit">shard_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `databases`<sup>Required</sup> <a name="databases" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.databases"></a>

```python
databases: DdmSchemaV1DatabasesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList">DdmSchemaV1DatabasesList</a>

---

##### `data_vips`<sup>Required</sup> <a name="data_vips" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.dataVips"></a>

```python
data_vips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.rds"></a>

```python
rds: DdmSchemaV1RdsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList">DdmSchemaV1RdsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.timeouts"></a>

```python
timeouts: DdmSchemaV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference">DdmSchemaV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_rds`<sup>Required</sup> <a name="used_rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.usedRds"></a>

```python
used_rds: DdmSchemaV1UsedRdsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList">DdmSchemaV1UsedRdsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `purge_rds_on_delete_input`<sup>Optional</sup> <a name="purge_rds_on_delete_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.purgeRdsOnDeleteInput"></a>

```python
purge_rds_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rds_input`<sup>Optional</sup> <a name="rds_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.rdsInput"></a>

```python
rds_input: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]

---

##### `shard_mode_input`<sup>Optional</sup> <a name="shard_mode_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardModeInput"></a>

```python
shard_mode_input: str
```

- *Type:* str

---

##### `shard_number_input`<sup>Optional</sup> <a name="shard_number_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardNumberInput"></a>

```python
shard_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_unit_input`<sup>Optional</sup> <a name="shard_unit_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardUnitInput"></a>

```python
shard_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DdmSchemaV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purge_rds_on_delete`<sup>Required</sup> <a name="purge_rds_on_delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.purgeRdsOnDelete"></a>

```python
purge_rds_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shard_mode`<sup>Required</sup> <a name="shard_mode" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardMode"></a>

```python
shard_mode: str
```

- *Type:* str

---

##### `shard_number`<sup>Required</sup> <a name="shard_number" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardNumber"></a>

```python
shard_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_unit`<sup>Required</sup> <a name="shard_unit" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.shardUnit"></a>

```python
shard_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DdmSchemaV1Config <a name="DdmSchemaV1Config" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  rds: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]],
  shard_mode: str,
  shard_number: typing.Union[int, float],
  id: str = None,
  purge_rds_on_delete: typing.Union[bool, IResolvable] = None,
  shard_unit: typing.Union[int, float] = None,
  timeouts: DdmSchemaV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#instance_id DdmSchemaV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#name DdmSchemaV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.rds">rds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]</code> | rds block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardMode">shard_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_mode DdmSchemaV1#shard_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardNumber">shard_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_number DdmSchemaV1#shard_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.purgeRdsOnDelete">purge_rds_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#purge_rds_on_delete DdmSchemaV1#purge_rds_on_delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardUnit">shard_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_unit DdmSchemaV1#shard_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#instance_id DdmSchemaV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#name DdmSchemaV1#name}.

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.rds"></a>

```python
rds: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]

rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#rds DdmSchemaV1#rds}

---

##### `shard_mode`<sup>Required</sup> <a name="shard_mode" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardMode"></a>

```python
shard_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_mode DdmSchemaV1#shard_mode}.

---

##### `shard_number`<sup>Required</sup> <a name="shard_number" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardNumber"></a>

```python
shard_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_number DdmSchemaV1#shard_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purge_rds_on_delete`<sup>Optional</sup> <a name="purge_rds_on_delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.purgeRdsOnDelete"></a>

```python
purge_rds_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#purge_rds_on_delete DdmSchemaV1#purge_rds_on_delete}.

---

##### `shard_unit`<sup>Optional</sup> <a name="shard_unit" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.shardUnit"></a>

```python
shard_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#shard_unit DdmSchemaV1#shard_unit}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Config.property.timeouts"></a>

```python
timeouts: DdmSchemaV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#timeouts DdmSchemaV1#timeouts}

---

### DdmSchemaV1Databases <a name="DdmSchemaV1Databases" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Databases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Databases.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1Databases()
```


### DdmSchemaV1Rds <a name="DdmSchemaV1Rds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1Rds(
  admin_password: str,
  admin_username: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#admin_password DdmSchemaV1#admin_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#admin_username DdmSchemaV1#admin_username}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#admin_password DdmSchemaV1#admin_password}.

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#admin_username DdmSchemaV1#admin_username}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#id DdmSchemaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DdmSchemaV1Timeouts <a name="DdmSchemaV1Timeouts" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#create DdmSchemaV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#delete DdmSchemaV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#update DdmSchemaV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#create DdmSchemaV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#delete DdmSchemaV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ddm_schema_v1#update DdmSchemaV1#update}.

---

### DdmSchemaV1UsedRds <a name="DdmSchemaV1UsedRds" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRds.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1UsedRds()
```


## Classes <a name="Classes" id="Classes"></a>

### DdmSchemaV1DatabasesList <a name="DdmSchemaV1DatabasesList" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1DatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DdmSchemaV1DatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DdmSchemaV1DatabasesOutputReference <a name="DdmSchemaV1DatabasesOutputReference" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1DatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.dbSlot">db_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.rdsName">rds_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Databases">DdmSchemaV1Databases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_slot`<sup>Required</sup> <a name="db_slot" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.dbSlot"></a>

```python
db_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rds_name`<sup>Required</sup> <a name="rds_name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.rdsName"></a>

```python
rds_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1DatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DdmSchemaV1Databases
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Databases">DdmSchemaV1Databases</a>

---


### DdmSchemaV1RdsList <a name="DdmSchemaV1RdsList" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1RdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DdmSchemaV1RdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DdmSchemaV1Rds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]]

---


### DdmSchemaV1RdsOutputReference <a name="DdmSchemaV1RdsOutputReference" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1RdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1RdsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DdmSchemaV1Rds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Rds">DdmSchemaV1Rds</a>]

---


### DdmSchemaV1TimeoutsOutputReference <a name="DdmSchemaV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DdmSchemaV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1Timeouts">DdmSchemaV1Timeouts</a>]

---


### DdmSchemaV1UsedRdsList <a name="DdmSchemaV1UsedRdsList" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1UsedRdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DdmSchemaV1UsedRdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DdmSchemaV1UsedRdsOutputReference <a name="DdmSchemaV1UsedRdsOutputReference" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ddm_schema_v1

ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRds">DdmSchemaV1UsedRds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRdsOutputReference.property.internalValue"></a>

```python
internal_value: DdmSchemaV1UsedRds
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ddmSchemaV1.DdmSchemaV1UsedRds">DdmSchemaV1UsedRds</a>

---



