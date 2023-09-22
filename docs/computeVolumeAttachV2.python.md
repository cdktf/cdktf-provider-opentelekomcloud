# `opentelekomcloud_compute_volume_attach_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_compute_volume_attach_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2).

# `computeVolumeAttachV2` Submodule <a name="`computeVolumeAttachV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVolumeAttachV2 <a name="ComputeVolumeAttachV2" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2 opentelekomcloud_compute_volume_attach_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  volume_id: str,
  device: str = None,
  id: str = None,
  region: str = None,
  timeouts: ComputeVolumeAttachV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#instance_id ComputeVolumeAttachV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#volume_id ComputeVolumeAttachV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#device ComputeVolumeAttachV2#device}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#id ComputeVolumeAttachV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#region ComputeVolumeAttachV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#instance_id ComputeVolumeAttachV2#instance_id}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#volume_id ComputeVolumeAttachV2#volume_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.device"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#device ComputeVolumeAttachV2#device}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#id ComputeVolumeAttachV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#region ComputeVolumeAttachV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#timeouts ComputeVolumeAttachV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#create ComputeVolumeAttachV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#delete ComputeVolumeAttachV2#delete}.

---

##### `reset_device` <a name="reset_device" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference">ComputeVolumeAttachV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.deviceInput">device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.timeouts"></a>

```python
timeouts: ComputeVolumeAttachV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference">ComputeVolumeAttachV2TimeoutsOutputReference</a>

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.deviceInput"></a>

```python
device_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeVolumeAttachV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVolumeAttachV2Config <a name="ComputeVolumeAttachV2Config" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  volume_id: str,
  device: str = None,
  id: str = None,
  region: str = None,
  timeouts: ComputeVolumeAttachV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#instance_id ComputeVolumeAttachV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#volume_id ComputeVolumeAttachV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#device ComputeVolumeAttachV2#device}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#id ComputeVolumeAttachV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#region ComputeVolumeAttachV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#instance_id ComputeVolumeAttachV2#instance_id}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#volume_id ComputeVolumeAttachV2#volume_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.device"></a>

```python
device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#device ComputeVolumeAttachV2#device}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#id ComputeVolumeAttachV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#region ComputeVolumeAttachV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Config.property.timeouts"></a>

```python
timeouts: ComputeVolumeAttachV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#timeouts ComputeVolumeAttachV2#timeouts}

---

### ComputeVolumeAttachV2Timeouts <a name="ComputeVolumeAttachV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#create ComputeVolumeAttachV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#delete ComputeVolumeAttachV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#create ComputeVolumeAttachV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/compute_volume_attach_v2#delete ComputeVolumeAttachV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVolumeAttachV2TimeoutsOutputReference <a name="ComputeVolumeAttachV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import compute_volume_attach_v2

computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeVolumeAttachV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.computeVolumeAttachV2.ComputeVolumeAttachV2Timeouts">ComputeVolumeAttachV2Timeouts</a>]

---



