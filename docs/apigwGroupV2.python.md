# `apigwGroupV2` Submodule <a name="`apigwGroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwGroupV2 <a name="ApigwGroupV2" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2 opentelekomcloud_apigw_group_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  name: str,
  description: str = None,
  environment: IResolvable | typing.List[ApigwGroupV2Environment] = None,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#instance_id ApigwGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#description ApigwGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.environment">environment</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]</code> | environment block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#id ApigwGroupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#region ApigwGroupV2#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#instance_id ApigwGroupV2#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#description ApigwGroupV2#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.environment"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#environment ApigwGroupV2#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#id ApigwGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#region ApigwGroupV2#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_environment` <a name="put_environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.putEnvironment"></a>

```python
def put_environment(
  value: IResolvable | typing.List[ApigwGroupV2Environment]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.putEnvironment.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigwGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigwGroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigwGroupV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigwGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList">ApigwGroupV2EnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.registrationTime">registration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.environmentInput">environment_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.environment"></a>

```python
environment: ApigwGroupV2EnvironmentList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList">ApigwGroupV2EnvironmentList</a>

---

##### `registration_time`<sup>Required</sup> <a name="registration_time" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.registrationTime"></a>

```python
registration_time: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.environmentInput"></a>

```python
environment_input: IResolvable | typing.List[ApigwGroupV2Environment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwGroupV2Config <a name="ApigwGroupV2Config" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  name: str,
  description: str = None,
  environment: IResolvable | typing.List[ApigwGroupV2Environment] = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#instance_id ApigwGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#description ApigwGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.environment">environment</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]</code> | environment block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#id ApigwGroupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#region ApigwGroupV2#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#instance_id ApigwGroupV2#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#description ApigwGroupV2#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.environment"></a>

```python
environment: IResolvable | typing.List[ApigwGroupV2Environment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#environment ApigwGroupV2#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#id ApigwGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#region ApigwGroupV2#region}.

---

### ApigwGroupV2Environment <a name="ApigwGroupV2Environment" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2Environment(
  environment_id: str,
  variable: IResolvable | typing.List[ApigwGroupV2EnvironmentVariable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#environment_id ApigwGroupV2#environment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment.property.variable">variable</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]</code> | variable block. |

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#environment_id ApigwGroupV2#environment_id}.

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment.property.variable"></a>

```python
variable: IResolvable | typing.List[ApigwGroupV2EnvironmentVariable]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#variable ApigwGroupV2#variable}

---

### ApigwGroupV2EnvironmentVariable <a name="ApigwGroupV2EnvironmentVariable" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2EnvironmentVariable(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#value ApigwGroupV2#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#name ApigwGroupV2#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/apigw_group_v2#value ApigwGroupV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwGroupV2EnvironmentList <a name="ApigwGroupV2EnvironmentList" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2EnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwGroupV2EnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigwGroupV2Environment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>]

---


### ApigwGroupV2EnvironmentOutputReference <a name="ApigwGroupV2EnvironmentOutputReference" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2EnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.putVariable">put_variable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_variable` <a name="put_variable" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.putVariable"></a>

```python
def put_variable(
  value: IResolvable | typing.List[ApigwGroupV2EnvironmentVariable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList">ApigwGroupV2EnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.variableInput">variable_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.variable"></a>

```python
variable: ApigwGroupV2EnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList">ApigwGroupV2EnvironmentVariableList</a>

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.variableInput"></a>

```python
variable_input: IResolvable | typing.List[ApigwGroupV2EnvironmentVariable]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigwGroupV2Environment
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2Environment">ApigwGroupV2Environment</a>

---


### ApigwGroupV2EnvironmentVariableList <a name="ApigwGroupV2EnvironmentVariableList" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2EnvironmentVariableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwGroupV2EnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigwGroupV2EnvironmentVariable]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>]

---


### ApigwGroupV2EnvironmentVariableOutputReference <a name="ApigwGroupV2EnvironmentVariableOutputReference" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_group_v2

apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigwGroupV2EnvironmentVariable
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwGroupV2.ApigwGroupV2EnvironmentVariable">ApigwGroupV2EnvironmentVariable</a>

---



