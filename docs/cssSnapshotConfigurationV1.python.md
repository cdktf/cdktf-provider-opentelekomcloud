# `opentelekomcloud_css_snapshot_configuration_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_css_snapshot_configuration_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1).

# `cssSnapshotConfigurationV1` Submodule <a name="`cssSnapshotConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssSnapshotConfigurationV1 <a name="CssSnapshotConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1 opentelekomcloud_css_snapshot_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  automatic: typing.Union[bool, IResolvable] = None,
  configuration: CssSnapshotConfigurationV1Configuration = None,
  creation_policy: CssSnapshotConfigurationV1CreationPolicy = None,
  id: str = None,
  timeouts: CssSnapshotConfigurationV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.creationPolicy">creation_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | creation_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.automatic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#configuration CssSnapshotConfigurationV1#configuration}

---

##### `creation_policy`<sup>Optional</sup> <a name="creation_policy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.creationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

creation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#creation_policy CssSnapshotConfigurationV1#creation_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#timeouts CssSnapshotConfigurationV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy">put_creation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic">reset_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy">reset_creation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration"></a>

```python
def put_configuration(
  agency: str,
  bucket: str,
  kms_id: str = None
) -> None
```

###### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration.parameter.agency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}.

---

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}.

---

###### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration.parameter.kmsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}.

---

##### `put_creation_policy` <a name="put_creation_policy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy"></a>

```python
def put_creation_policy(
  enable: typing.Union[bool, IResolvable],
  keepday: typing.Union[int, float],
  period: str,
  prefix: str,
  delete_auto: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}.

---

###### `keepday`<sup>Required</sup> <a name="keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.keepday"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}.

---

###### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.period"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}.

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}.

---

###### `delete_auto`<sup>Optional</sup> <a name="delete_auto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.deleteAuto"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}.

---

##### `reset_automatic` <a name="reset_automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic"></a>

```python
def reset_automatic() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_creation_policy` <a name="reset_creation_policy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy"></a>

```python
def reset_creation_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath">base_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy">creation_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput">automatic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput">creation_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_path`<sup>Required</sup> <a name="base_path" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath"></a>

```python
base_path: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration"></a>

```python
configuration: CssSnapshotConfigurationV1ConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a>

---

##### `creation_policy`<sup>Required</sup> <a name="creation_policy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy"></a>

```python
creation_policy: CssSnapshotConfigurationV1CreationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts"></a>

```python
timeouts: CssSnapshotConfigurationV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a>

---

##### `automatic_input`<sup>Optional</sup> <a name="automatic_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput"></a>

```python
automatic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput"></a>

```python
configuration_input: CssSnapshotConfigurationV1Configuration
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---

##### `creation_policy_input`<sup>Optional</sup> <a name="creation_policy_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput"></a>

```python
creation_policy_input: CssSnapshotConfigurationV1CreationPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CssSnapshotConfigurationV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>, cdktf.IResolvable]

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic"></a>

```python
automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CssSnapshotConfigurationV1Config <a name="CssSnapshotConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  automatic: typing.Union[bool, IResolvable] = None,
  configuration: CssSnapshotConfigurationV1Configuration = None,
  creation_policy: CssSnapshotConfigurationV1CreationPolicy = None,
  id: str = None,
  timeouts: CssSnapshotConfigurationV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy">creation_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | creation_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic"></a>

```python
automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration"></a>

```python
configuration: CssSnapshotConfigurationV1Configuration
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#configuration CssSnapshotConfigurationV1#configuration}

---

##### `creation_policy`<sup>Optional</sup> <a name="creation_policy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy"></a>

```python
creation_policy: CssSnapshotConfigurationV1CreationPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

creation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#creation_policy CssSnapshotConfigurationV1#creation_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts"></a>

```python
timeouts: CssSnapshotConfigurationV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#timeouts CssSnapshotConfigurationV1#timeouts}

---

### CssSnapshotConfigurationV1Configuration <a name="CssSnapshotConfigurationV1Configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration(
  agency: str,
  bucket: str,
  kms_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency">agency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId">kms_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}. |

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency"></a>

```python
agency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}.

---

##### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}.

---

### CssSnapshotConfigurationV1CreationPolicy <a name="CssSnapshotConfigurationV1CreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy(
  enable: typing.Union[bool, IResolvable],
  keepday: typing.Union[int, float],
  period: str,
  prefix: str,
  delete_auto: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday">keepday</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto">delete_auto</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}.

---

##### `keepday`<sup>Required</sup> <a name="keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday"></a>

```python
keepday: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period"></a>

```python
period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}.

---

##### `delete_auto`<sup>Optional</sup> <a name="delete_auto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto"></a>

```python
delete_auto: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}.

---

### CssSnapshotConfigurationV1Timeouts <a name="CssSnapshotConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssSnapshotConfigurationV1ConfigurationOutputReference <a name="CssSnapshotConfigurationV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId">reset_kms_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_id` <a name="reset_kms_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId"></a>

```python
def reset_kms_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput">agency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput">kms_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency">agency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agency_input`<sup>Optional</sup> <a name="agency_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput"></a>

```python
agency_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `kms_id_input`<sup>Optional</sup> <a name="kms_id_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput"></a>

```python
kms_id_input: str
```

- *Type:* str

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency"></a>

```python
agency: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CssSnapshotConfigurationV1Configuration
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---


### CssSnapshotConfigurationV1CreationPolicyOutputReference <a name="CssSnapshotConfigurationV1CreationPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto">reset_delete_auto</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_auto` <a name="reset_delete_auto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto"></a>

```python
def reset_delete_auto() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput">delete_auto_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput">keepday_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto">delete_auto</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday">keepday</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_auto_input`<sup>Optional</sup> <a name="delete_auto_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput"></a>

```python
delete_auto_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keepday_input`<sup>Optional</sup> <a name="keepday_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput"></a>

```python
keepday_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `delete_auto`<sup>Required</sup> <a name="delete_auto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto"></a>

```python
delete_auto: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keepday`<sup>Required</sup> <a name="keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday"></a>

```python
keepday: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CssSnapshotConfigurationV1CreationPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---


### CssSnapshotConfigurationV1TimeoutsOutputReference <a name="CssSnapshotConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import css_snapshot_configuration_v1

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CssSnapshotConfigurationV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>, cdktf.IResolvable]

---



