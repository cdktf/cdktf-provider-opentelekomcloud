# `dataOpentelekomcloudHssHostGroupsV5` Submodule <a name="`dataOpentelekomcloudHssHostGroupsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostGroupsV5 <a name="DataOpentelekomcloudHssHostGroupsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str = None,
  host_num: str = None,
  id: str = None,
  name: str = None,
  risk_host_num: str = None,
  unprotect_host_num: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.hostNum">host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.riskHostNum">risk_host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.unprotectHostNum">unprotect_host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}.

---

##### `host_num`<sup>Optional</sup> <a name="host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.hostNum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}.

---

##### `risk_host_num`<sup>Optional</sup> <a name="risk_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.riskHostNum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}.

---

##### `unprotect_host_num`<sup>Optional</sup> <a name="unprotect_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.unprotectHostNum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum">reset_host_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum">reset_risk_host_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum">reset_unprotect_host_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_host_num` <a name="reset_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum"></a>

```python
def reset_host_num() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_risk_host_num` <a name="reset_risk_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum"></a>

```python
def reset_risk_host_num() -> None
```

##### `reset_unprotect_host_num` <a name="reset_unprotect_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum"></a>

```python
def reset_unprotect_host_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudHssHostGroupsV5 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudHssHostGroupsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostGroupsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput">host_num_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput">risk_host_num_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput">unprotect_host_num_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum">host_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum">risk_host_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum">unprotect_host_num</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups"></a>

```python
groups: DataOpentelekomcloudHssHostGroupsV5GroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `host_num_input`<sup>Optional</sup> <a name="host_num_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput"></a>

```python
host_num_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `risk_host_num_input`<sup>Optional</sup> <a name="risk_host_num_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput"></a>

```python
risk_host_num_input: str
```

- *Type:* str

---

##### `unprotect_host_num_input`<sup>Optional</sup> <a name="unprotect_host_num_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput"></a>

```python
unprotect_host_num_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `host_num`<sup>Required</sup> <a name="host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum"></a>

```python
host_num: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `risk_host_num`<sup>Required</sup> <a name="risk_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum"></a>

```python
risk_host_num: str
```

- *Type:* str

---

##### `unprotect_host_num`<sup>Required</sup> <a name="unprotect_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum"></a>

```python
unprotect_host_num: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostGroupsV5Config <a name="DataOpentelekomcloudHssHostGroupsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str = None,
  host_num: str = None,
  id: str = None,
  name: str = None,
  risk_host_num: str = None,
  unprotect_host_num: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum">host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum">risk_host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum">unprotect_host_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}.

---

##### `host_num`<sup>Optional</sup> <a name="host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum"></a>

```python
host_num: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}.

---

##### `risk_host_num`<sup>Optional</sup> <a name="risk_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum"></a>

```python
risk_host_num: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}.

---

##### `unprotect_host_num`<sup>Optional</sup> <a name="unprotect_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum"></a>

```python
unprotect_host_num: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}.

---

### DataOpentelekomcloudHssHostGroupsV5Groups <a name="DataOpentelekomcloudHssHostGroupsV5Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostGroupsV5GroupsList <a name="DataOpentelekomcloudHssHostGroupsV5GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference <a name="DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_host_groups_v5

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds">host_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum">host_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum">risk_host_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum">unprotect_host_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_ids`<sup>Required</sup> <a name="host_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds"></a>

```python
host_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_num`<sup>Required</sup> <a name="host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum"></a>

```python
host_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `risk_host_num`<sup>Required</sup> <a name="risk_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum"></a>

```python
risk_host_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unprotect_host_num`<sup>Required</sup> <a name="unprotect_host_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum"></a>

```python
unprotect_host_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssHostGroupsV5Groups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a>

---



