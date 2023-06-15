# `data_opentelekomcloud_images_image_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_images_image_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2).

# `dataOpentelekomcloudImagesImageV2` Submodule <a name="`dataOpentelekomcloudImagesImageV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudImagesImageV2 <a name="DataOpentelekomcloudImagesImageV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2 opentelekomcloud_images_image_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_images_image_v2

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_regex: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  region: str = None,
  size_max: typing.Union[int, float] = None,
  size_min: typing.Union[int, float] = None,
  sort_direction: str = None,
  sort_key: str = None,
  tag: str = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.mostRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}.

---

##### `size_max`<sup>Optional</sup> <a name="size_max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sizeMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}.

---

##### `size_min`<sup>Optional</sup> <a name="size_min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sizeMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sortDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.sortKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMax">reset_size_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMin">reset_size_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortDirection">reset_sort_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortKey">reset_sort_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_size_max` <a name="reset_size_max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMax"></a>

```python
def reset_size_max() -> None
```

##### `reset_size_min` <a name="reset_size_min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMin"></a>

```python
def reset_size_min() -> None
```

##### `reset_sort_direction` <a name="reset_sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortDirection"></a>

```python
def reset_sort_direction() -> None
```

##### `reset_sort_key` <a name="reset_sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortKey"></a>

```python
def reset_sort_key() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_images_image_v2

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_images_image_v2

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_images_image_v2

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.containerFormat">container_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.diskFormat">disk_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minDiskGb">min_disk_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minRamMb">min_ram_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecentInput">most_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMaxInput">size_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMinInput">size_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirectionInput">sort_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKeyInput">sort_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirection">sort_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKey">sort_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `container_format`<sup>Required</sup> <a name="container_format" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.containerFormat"></a>

```python
container_format: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `disk_format`<sup>Required</sup> <a name="disk_format" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.diskFormat"></a>

```python
disk_format: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `min_disk_gb`<sup>Required</sup> <a name="min_disk_gb" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minDiskGb"></a>

```python
min_disk_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram_mb`<sup>Required</sup> <a name="min_ram_mb" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minRamMb"></a>

```python
min_ram_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.protected"></a>

```python
protected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecentInput"></a>

```python
most_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_max_input`<sup>Optional</sup> <a name="size_max_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMaxInput"></a>

```python
size_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_min_input`<sup>Optional</sup> <a name="size_min_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMinInput"></a>

```python
size_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_direction_input`<sup>Optional</sup> <a name="sort_direction_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirectionInput"></a>

```python
sort_direction_input: str
```

- *Type:* str

---

##### `sort_key_input`<sup>Optional</sup> <a name="sort_key_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKeyInput"></a>

```python
sort_key_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size_max`<sup>Required</sup> <a name="size_max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMax"></a>

```python
size_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_min`<sup>Required</sup> <a name="size_min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMin"></a>

```python
size_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_direction`<sup>Required</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

---

##### `sort_key`<sup>Required</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudImagesImageV2Config <a name="DataOpentelekomcloudImagesImageV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_images_image_v2

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_regex: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  region: str = None,
  size_max: typing.Union[int, float] = None,
  size_min: typing.Union[int, float] = None,
  sort_direction: str = None,
  sort_key: str = None,
  tag: str = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}.

---

##### `size_max`<sup>Optional</sup> <a name="size_max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMax"></a>

```python
size_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}.

---

##### `size_min`<sup>Optional</sup> <a name="size_min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMin"></a>

```python
size_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}.

---



