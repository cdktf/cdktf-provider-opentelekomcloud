# `dmsConsumerGroupV2` Submodule <a name="`dmsConsumerGroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsConsumerGroupV2 <a name="DmsConsumerGroupV2" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2 opentelekomcloud_dms_consumer_group_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_name: str,
  instance_id: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsConsumerGroupV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsConsumerGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsConsumerGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy">assignment_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId">coordinator_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets">group_message_offsets</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members">members</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_strategy`<sup>Required</sup> <a name="assignment_strategy" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy"></a>

```python
assignment_strategy: str
```

- *Type:* str

---

##### `coordinator_id`<sup>Required</sup> <a name="coordinator_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId"></a>

```python
coordinator_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_message_offsets`<sup>Required</sup> <a name="group_message_offsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets"></a>

```python
group_message_offsets: DmsConsumerGroupV2GroupMessageOffsetsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members"></a>

```python
members: DmsConsumerGroupV2MembersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsConsumerGroupV2Config <a name="DmsConsumerGroupV2Config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_name: str,
  instance_id: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DmsConsumerGroupV2GroupMessageOffsets <a name="DmsConsumerGroupV2GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets()
```


### DmsConsumerGroupV2Members <a name="DmsConsumerGroupV2Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2Members()
```


### DmsConsumerGroupV2MembersAssignments <a name="DmsConsumerGroupV2MembersAssignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments()
```


## Classes <a name="Classes" id="Classes"></a>

### DmsConsumerGroupV2GroupMessageOffsetsList <a name="DmsConsumerGroupV2GroupMessageOffsetsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsConsumerGroupV2GroupMessageOffsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DmsConsumerGroupV2GroupMessageOffsetsOutputReference <a name="DmsConsumerGroupV2GroupMessageOffsetsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag">lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset">message_current_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset">message_log_end_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lag`<sup>Required</sup> <a name="lag" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag"></a>

```python
lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_current_offset`<sup>Required</sup> <a name="message_current_offset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset"></a>

```python
message_current_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_log_end_offset`<sup>Required</sup> <a name="message_log_end_offset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset"></a>

```python
message_log_end_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue"></a>

```python
internal_value: DmsConsumerGroupV2GroupMessageOffsets
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a>

---


### DmsConsumerGroupV2MembersAssignmentsList <a name="DmsConsumerGroupV2MembersAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsConsumerGroupV2MembersAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DmsConsumerGroupV2MembersAssignmentsOutputReference <a name="DmsConsumerGroupV2MembersAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions">partitions</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions"></a>

```python
partitions: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DmsConsumerGroupV2MembersAssignments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a>

---


### DmsConsumerGroupV2MembersList <a name="DmsConsumerGroupV2MembersList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2MembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsConsumerGroupV2MembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DmsConsumerGroupV2MembersOutputReference <a name="DmsConsumerGroupV2MembersOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_consumer_group_v2

dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments">assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments"></a>

```python
assignments: DmsConsumerGroupV2MembersAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue"></a>

```python
internal_value: DmsConsumerGroupV2Members
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a>

---



