# `opentelekomcloud_sfs_share_access_rules_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_sfs_share_access_rules_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2).

# `sfsShareAccessRulesV2` Submodule <a name="`sfsShareAccessRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfsShareAccessRulesV2 <a name="SfsShareAccessRulesV2" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2 opentelekomcloud_sfs_share_access_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_rule: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]],
  share_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.accessRule">access_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]</code> | access_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.accessRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_rule SfsShareAccessRulesV2#access_rule}

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.shareId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule">put_access_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_rule` <a name="put_access_rule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule"></a>

```python
def put_access_rule(
  value: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRule">access_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList">SfsShareAccessRulesV2AccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRuleInput">access_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareIdInput">share_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareId">share_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRule"></a>

```python
access_rule: SfsShareAccessRulesV2AccessRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList">SfsShareAccessRulesV2AccessRuleList</a>

---

##### `access_rule_input`<sup>Optional</sup> <a name="access_rule_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRuleInput"></a>

```python
access_rule_input: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `share_id_input`<sup>Optional</sup> <a name="share_id_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareIdInput"></a>

```python
share_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SfsShareAccessRulesV2AccessRule <a name="SfsShareAccessRulesV2AccessRule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule(
  access_level: str,
  access_to: str,
  access_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_level SfsShareAccessRulesV2#access_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessTo">access_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_to SfsShareAccessRulesV2#access_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_type SfsShareAccessRulesV2#access_type}. |

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_level SfsShareAccessRulesV2#access_level}.

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessTo"></a>

```python
access_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_to SfsShareAccessRulesV2#access_to}.

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_type SfsShareAccessRulesV2#access_type}.

---

### SfsShareAccessRulesV2Config <a name="SfsShareAccessRulesV2Config" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_rule: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]],
  share_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.accessRule">access_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]</code> | access_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.accessRule"></a>

```python
access_rule: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#access_rule SfsShareAccessRulesV2#access_rule}

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SfsShareAccessRulesV2AccessRuleList <a name="SfsShareAccessRulesV2AccessRuleList" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SfsShareAccessRulesV2AccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SfsShareAccessRulesV2AccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]]

---


### SfsShareAccessRulesV2AccessRuleOutputReference <a name="SfsShareAccessRulesV2AccessRuleOutputReference" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import sfs_share_access_rules_v2

sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessRuleStatus">access_rule_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.shareAccessId">share_access_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessToInput">access_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTo">access_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_rule_status`<sup>Required</sup> <a name="access_rule_status" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessRuleStatus"></a>

```python
access_rule_status: str
```

- *Type:* str

---

##### `share_access_id`<sup>Required</sup> <a name="share_access_id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.shareAccessId"></a>

```python
share_access_id: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `access_to_input`<sup>Optional</sup> <a name="access_to_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessToInput"></a>

```python
access_to_input: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTo"></a>

```python
access_to: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SfsShareAccessRulesV2AccessRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule">SfsShareAccessRulesV2AccessRule</a>]

---



