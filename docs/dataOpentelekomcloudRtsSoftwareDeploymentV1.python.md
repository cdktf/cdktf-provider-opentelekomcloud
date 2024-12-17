# `dataOpentelekomcloudRtsSoftwareDeploymentV1` Submodule <a name="`dataOpentelekomcloudRtsSoftwareDeploymentV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsSoftwareDeploymentV1 <a name="DataOpentelekomcloudRtsSoftwareDeploymentV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1 opentelekomcloud_rts_software_deployment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str = None,
  config_id: str = None,
  id: str = None,
  region: str = None,
  server_id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.configId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}.

---

##### `server_id`<sup>Optional</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetConfigId">reset_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetServerId">reset_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_config_id` <a name="reset_config_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetConfigId"></a>

```python
def reset_config_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_server_id` <a name="reset_server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetServerId"></a>

```python
def reset_server_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRtsSoftwareDeploymentV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudRtsSoftwareDeploymentV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudRtsSoftwareDeploymentV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudRtsSoftwareDeploymentV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRtsSoftwareDeploymentV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.inputValues">input_values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.outputValues">output_values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `input_values`<sup>Required</sup> <a name="input_values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.inputValues"></a>

```python
input_values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `output_values`<sup>Required</sup> <a name="output_values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.outputValues"></a>

```python
output_values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsSoftwareDeploymentV1Config <a name="DataOpentelekomcloudRtsSoftwareDeploymentV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_software_deployment_v1

dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str = None,
  config_id: str = None,
  id: str = None,
  region: str = None,
  server_id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.configId"></a>

```python
config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}.

---

##### `server_id`<sup>Optional</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}.

---



