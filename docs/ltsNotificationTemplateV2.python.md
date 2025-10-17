# `ltsNotificationTemplateV2` Submodule <a name="`ltsNotificationTemplateV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsNotificationTemplateV2 <a name="LtsNotificationTemplateV2" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2 opentelekomcloud_lts_notification_template_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  language: str,
  name: str,
  source: str,
  templates: IResolvable | typing.List[LtsNotificationTemplateV2Templates],
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.templates">templates</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]</code> | templates block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.language"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}.

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.templates"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#templates LtsNotificationTemplateV2#templates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates">put_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_templates` <a name="put_templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates"></a>

```python
def put_templates(
  value: IResolvable | typing.List[LtsNotificationTemplateV2Templates]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LtsNotificationTemplateV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LtsNotificationTemplateV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LtsNotificationTemplateV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LtsNotificationTemplateV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LtsNotificationTemplateV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templates">templates</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList">LtsNotificationTemplateV2TemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templatesInput">templates_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templates"></a>

```python
templates: LtsNotificationTemplateV2TemplatesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList">LtsNotificationTemplateV2TemplatesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `templates_input`<sup>Optional</sup> <a name="templates_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templatesInput"></a>

```python
templates_input: IResolvable | typing.List[LtsNotificationTemplateV2Templates]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LtsNotificationTemplateV2Config <a name="LtsNotificationTemplateV2Config" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  language: str,
  name: str,
  source: str,
  templates: IResolvable | typing.List[LtsNotificationTemplateV2Templates],
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.templates">templates</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]</code> | templates block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}.

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.templates"></a>

```python
templates: IResolvable | typing.List[LtsNotificationTemplateV2Templates]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#templates LtsNotificationTemplateV2#templates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LtsNotificationTemplateV2Templates <a name="LtsNotificationTemplateV2Templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates(
  content: str,
  sub_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#content LtsNotificationTemplateV2#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.subType">sub_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#sub_type LtsNotificationTemplateV2#sub_type}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#content LtsNotificationTemplateV2#content}.

---

##### `sub_type`<sup>Required</sup> <a name="sub_type" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.subType"></a>

```python
sub_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_notification_template_v2#sub_type LtsNotificationTemplateV2#sub_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsNotificationTemplateV2TemplatesList <a name="LtsNotificationTemplateV2TemplatesList" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LtsNotificationTemplateV2TemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LtsNotificationTemplateV2Templates]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>]

---


### LtsNotificationTemplateV2TemplatesOutputReference <a name="LtsNotificationTemplateV2TemplatesOutputReference" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_notification_template_v2

ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subTypeInput">sub_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subType">sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `sub_type_input`<sup>Optional</sup> <a name="sub_type_input" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subTypeInput"></a>

```python
sub_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `sub_type`<sup>Required</sup> <a name="sub_type" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subType"></a>

```python
sub_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LtsNotificationTemplateV2Templates
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>

---



