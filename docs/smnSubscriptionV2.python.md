# `smnSubscriptionV2` Submodule <a name="`smnSubscriptionV2` Submodule" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmnSubscriptionV2 <a name="SmnSubscriptionV2" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2 opentelekomcloud_smn_subscription_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import smn_subscription_v2

smnSubscriptionV2.SmnSubscriptionV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint: str,
  protocol: str,
  topic_urn: str,
  id: str = None,
  project_name: str = None,
  remark: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.topicUrn">topic_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#id SmnSubscriptionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.remark">remark</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#remark SmnSubscriptionV2#remark}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}.

---

##### `topic_urn`<sup>Required</sup> <a name="topic_urn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.topicUrn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#id SmnSubscriptionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_name`<sup>Optional</sup> <a name="project_name" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}.

---

##### `remark`<sup>Optional</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.remark"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#remark SmnSubscriptionV2#remark}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetProjectName">reset_project_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetRemark">reset_remark</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_name` <a name="reset_project_name" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetProjectName"></a>

```python
def reset_project_name() -> None
```

##### `reset_remark` <a name="reset_remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetRemark"></a>

```python
def reset_remark() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import smn_subscription_v2

smnSubscriptionV2.SmnSubscriptionV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import smn_subscription_v2

smnSubscriptionV2.SmnSubscriptionV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import smn_subscription_v2

smnSubscriptionV2.SmnSubscriptionV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.status">status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.subscriptionUrn">subscription_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remarkInput">remark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrnInput">topic_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remark">remark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrn">topic_urn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscription_urn`<sup>Required</sup> <a name="subscription_urn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.subscriptionUrn"></a>

```python
subscription_urn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `remark_input`<sup>Optional</sup> <a name="remark_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remarkInput"></a>

```python
remark_input: str
```

- *Type:* str

---

##### `topic_urn_input`<sup>Optional</sup> <a name="topic_urn_input" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrnInput"></a>

```python
topic_urn_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remark`<sup>Required</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remark"></a>

```python
remark: str
```

- *Type:* str

---

##### `topic_urn`<sup>Required</sup> <a name="topic_urn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrn"></a>

```python
topic_urn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmnSubscriptionV2Config <a name="SmnSubscriptionV2Config" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import smn_subscription_v2

smnSubscriptionV2.SmnSubscriptionV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint: str,
  protocol: str,
  topic_urn: str,
  id: str = None,
  project_name: str = None,
  remark: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.topicUrn">topic_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#id SmnSubscriptionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.remark">remark</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#remark SmnSubscriptionV2#remark}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}.

---

##### `topic_urn`<sup>Required</sup> <a name="topic_urn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.topicUrn"></a>

```python
topic_urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#id SmnSubscriptionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_name`<sup>Optional</sup> <a name="project_name" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}.

---

##### `remark`<sup>Optional</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.remark"></a>

```python
remark: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_subscription_v2#remark SmnSubscriptionV2#remark}.

---


