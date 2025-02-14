# `dataOpentelekomcloudCceAddonTemplateV3` Submodule <a name="`dataOpentelekomcloudCceAddonTemplateV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceAddonTemplateV3 <a name="DataOpentelekomcloudCceAddonTemplateV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3 opentelekomcloud_cce_addon_template_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  addon_name: str,
  addon_version: str,
  cluster_ip: str = None,
  cluster_versions: str = None,
  id: str = None,
  image_version: str = None,
  swr_addr: str = None,
  swr_user: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_name DataOpentelekomcloudCceAddonTemplateV3#addon_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.addonVersion">addon_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_version DataOpentelekomcloudCceAddonTemplateV3#addon_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.clusterIp">cluster_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_ip DataOpentelekomcloudCceAddonTemplateV3#cluster_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.clusterVersions">cluster_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_versions DataOpentelekomcloudCceAddonTemplateV3#cluster_versions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#id DataOpentelekomcloudCceAddonTemplateV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#image_version DataOpentelekomcloudCceAddonTemplateV3#image_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.swrAddr">swr_addr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_addr DataOpentelekomcloudCceAddonTemplateV3#swr_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.swrUser">swr_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_user DataOpentelekomcloudCceAddonTemplateV3#swr_user}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.addonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_name DataOpentelekomcloudCceAddonTemplateV3#addon_name}.

---

##### `addon_version`<sup>Required</sup> <a name="addon_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.addonVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_version DataOpentelekomcloudCceAddonTemplateV3#addon_version}.

---

##### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.clusterIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_ip DataOpentelekomcloudCceAddonTemplateV3#cluster_ip}.

---

##### `cluster_versions`<sup>Optional</sup> <a name="cluster_versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.clusterVersions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_versions DataOpentelekomcloudCceAddonTemplateV3#cluster_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#id DataOpentelekomcloudCceAddonTemplateV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.imageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#image_version DataOpentelekomcloudCceAddonTemplateV3#image_version}.

---

##### `swr_addr`<sup>Optional</sup> <a name="swr_addr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.swrAddr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_addr DataOpentelekomcloudCceAddonTemplateV3#swr_addr}.

---

##### `swr_user`<sup>Optional</sup> <a name="swr_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.Initializer.parameter.swrUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_user DataOpentelekomcloudCceAddonTemplateV3#swr_user}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetClusterIp">reset_cluster_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetClusterVersions">reset_cluster_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetImageVersion">reset_image_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetSwrAddr">reset_swr_addr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetSwrUser">reset_swr_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_ip` <a name="reset_cluster_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetClusterIp"></a>

```python
def reset_cluster_ip() -> None
```

##### `reset_cluster_versions` <a name="reset_cluster_versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetClusterVersions"></a>

```python
def reset_cluster_versions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_version` <a name="reset_image_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetImageVersion"></a>

```python
def reset_image_version() -> None
```

##### `reset_swr_addr` <a name="reset_swr_addr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetSwrAddr"></a>

```python
def reset_swr_addr() -> None
```

##### `reset_swr_user` <a name="reset_swr_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.resetSwrUser"></a>

```python
def reset_swr_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplateV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplateV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCceAddonTemplateV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCceAddonTemplateV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCceAddonTemplateV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonNameInput">addon_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonVersionInput">addon_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterIpInput">cluster_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterVersionsInput">cluster_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.imageVersionInput">image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrAddrInput">swr_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrUserInput">swr_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonName">addon_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonVersion">addon_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterIp">cluster_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterVersions">cluster_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrAddr">swr_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrUser">swr_user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `addon_name_input`<sup>Optional</sup> <a name="addon_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonNameInput"></a>

```python
addon_name_input: str
```

- *Type:* str

---

##### `addon_version_input`<sup>Optional</sup> <a name="addon_version_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonVersionInput"></a>

```python
addon_version_input: str
```

- *Type:* str

---

##### `cluster_ip_input`<sup>Optional</sup> <a name="cluster_ip_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterIpInput"></a>

```python
cluster_ip_input: str
```

- *Type:* str

---

##### `cluster_versions_input`<sup>Optional</sup> <a name="cluster_versions_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterVersionsInput"></a>

```python
cluster_versions_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_version_input`<sup>Optional</sup> <a name="image_version_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.imageVersionInput"></a>

```python
image_version_input: str
```

- *Type:* str

---

##### `swr_addr_input`<sup>Optional</sup> <a name="swr_addr_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrAddrInput"></a>

```python
swr_addr_input: str
```

- *Type:* str

---

##### `swr_user_input`<sup>Optional</sup> <a name="swr_user_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrUserInput"></a>

```python
swr_user_input: str
```

- *Type:* str

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

---

##### `addon_version`<sup>Required</sup> <a name="addon_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.addonVersion"></a>

```python
addon_version: str
```

- *Type:* str

---

##### `cluster_ip`<sup>Required</sup> <a name="cluster_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

---

##### `cluster_versions`<sup>Required</sup> <a name="cluster_versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.clusterVersions"></a>

```python
cluster_versions: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `swr_addr`<sup>Required</sup> <a name="swr_addr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrAddr"></a>

```python
swr_addr: str
```

- *Type:* str

---

##### `swr_user`<sup>Required</sup> <a name="swr_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.swrUser"></a>

```python
swr_user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceAddonTemplateV3Config <a name="DataOpentelekomcloudCceAddonTemplateV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_addon_template_v3

dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  addon_name: str,
  addon_version: str,
  cluster_ip: str = None,
  cluster_versions: str = None,
  id: str = None,
  image_version: str = None,
  swr_addr: str = None,
  swr_user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_name DataOpentelekomcloudCceAddonTemplateV3#addon_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.addonVersion">addon_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_version DataOpentelekomcloudCceAddonTemplateV3#addon_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.clusterIp">cluster_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_ip DataOpentelekomcloudCceAddonTemplateV3#cluster_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.clusterVersions">cluster_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_versions DataOpentelekomcloudCceAddonTemplateV3#cluster_versions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#id DataOpentelekomcloudCceAddonTemplateV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#image_version DataOpentelekomcloudCceAddonTemplateV3#image_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.swrAddr">swr_addr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_addr DataOpentelekomcloudCceAddonTemplateV3#swr_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.swrUser">swr_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_user DataOpentelekomcloudCceAddonTemplateV3#swr_user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_name DataOpentelekomcloudCceAddonTemplateV3#addon_name}.

---

##### `addon_version`<sup>Required</sup> <a name="addon_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.addonVersion"></a>

```python
addon_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#addon_version DataOpentelekomcloudCceAddonTemplateV3#addon_version}.

---

##### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_ip DataOpentelekomcloudCceAddonTemplateV3#cluster_ip}.

---

##### `cluster_versions`<sup>Optional</sup> <a name="cluster_versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.clusterVersions"></a>

```python
cluster_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#cluster_versions DataOpentelekomcloudCceAddonTemplateV3#cluster_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#id DataOpentelekomcloudCceAddonTemplateV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#image_version DataOpentelekomcloudCceAddonTemplateV3#image_version}.

---

##### `swr_addr`<sup>Optional</sup> <a name="swr_addr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.swrAddr"></a>

```python
swr_addr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_addr DataOpentelekomcloudCceAddonTemplateV3#swr_addr}.

---

##### `swr_user`<sup>Optional</sup> <a name="swr_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplateV3.DataOpentelekomcloudCceAddonTemplateV3Config.property.swrUser"></a>

```python
swr_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/data-sources/cce_addon_template_v3#swr_user DataOpentelekomcloudCceAddonTemplateV3#swr_user}.

---



