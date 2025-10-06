# `dcVirtualGatewayV2` Submodule <a name="`dcVirtualGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualGatewayV2 <a name="DcVirtualGatewayV2" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2 opentelekomcloud_dc_virtual_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_id: str,
  asn: typing.Union[int, float] = None,
  description: str = None,
  device_id: str = None,
  id: str = None,
  local_ep_group: DcVirtualGatewayV2LocalEpGroup = None,
  local_ep_group_v6: DcVirtualGatewayV2LocalEpGroupV6 = None,
  project_id: str = None,
  redundant_device_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.localEpGroup">local_ep_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | local_ep_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.localEpGroupV6">local_ep_group_v6</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | local_ep_group_v6 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.redundantDeviceId">redundant_device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_ep_group`<sup>Optional</sup> <a name="local_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.localEpGroup"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

local_ep_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#local_ep_group DcVirtualGatewayV2#local_ep_group}

---

##### `local_ep_group_v6`<sup>Optional</sup> <a name="local_ep_group_v6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.localEpGroupV6"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

local_ep_group_v6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#local_ep_group_v6 DcVirtualGatewayV2#local_ep_group_v6}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}.

---

##### `redundant_device_id`<sup>Optional</sup> <a name="redundant_device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.redundantDeviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup">put_local_ep_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6">put_local_ep_group_v6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroup">reset_local_ep_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroupV6">reset_local_ep_group_v6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId">reset_redundant_device_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_local_ep_group` <a name="put_local_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup"></a>

```python
def put_local_ep_group(
  endpoints: typing.List[str],
  description: str = None,
  name: str = None,
  type: str = None
) -> None
```

###### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup.parameter.endpoints"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

##### `put_local_ep_group_v6` <a name="put_local_ep_group_v6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6"></a>

```python
def put_local_ep_group_v6(
  endpoints: typing.List[str],
  description: str = None,
  name: str = None,
  type: str = None
) -> None
```

###### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6.parameter.endpoints"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_ep_group` <a name="reset_local_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroup"></a>

```python
def reset_local_ep_group() -> None
```

##### `reset_local_ep_group_v6` <a name="reset_local_ep_group_v6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroupV6"></a>

```python
def reset_local_ep_group_v6() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_redundant_device_id` <a name="reset_redundant_device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId"></a>

```python
def reset_redundant_device_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcVirtualGatewayV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcVirtualGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroup">local_ep_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference">DcVirtualGatewayV2LocalEpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId">local_ep_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIpv6Id">local_ep_group_ipv6_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6">local_ep_group_v6</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference">DcVirtualGatewayV2LocalEpGroupV6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupInput">local_ep_group_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6Input">local_ep_group_v6_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput">redundant_device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId">redundant_device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `local_ep_group`<sup>Required</sup> <a name="local_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroup"></a>

```python
local_ep_group: DcVirtualGatewayV2LocalEpGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference">DcVirtualGatewayV2LocalEpGroupOutputReference</a>

---

##### `local_ep_group_id`<sup>Required</sup> <a name="local_ep_group_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId"></a>

```python
local_ep_group_id: str
```

- *Type:* str

---

##### `local_ep_group_ipv6_id`<sup>Required</sup> <a name="local_ep_group_ipv6_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIpv6Id"></a>

```python
local_ep_group_ipv6_id: str
```

- *Type:* str

---

##### `local_ep_group_v6`<sup>Required</sup> <a name="local_ep_group_v6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6"></a>

```python
local_ep_group_v6: DcVirtualGatewayV2LocalEpGroupV6OutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference">DcVirtualGatewayV2LocalEpGroupV6OutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_ep_group_input`<sup>Optional</sup> <a name="local_ep_group_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupInput"></a>

```python
local_ep_group_input: DcVirtualGatewayV2LocalEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

---

##### `local_ep_group_v6_input`<sup>Optional</sup> <a name="local_ep_group_v6_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6Input"></a>

```python
local_ep_group_v6_input: DcVirtualGatewayV2LocalEpGroupV6
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `redundant_device_id_input`<sup>Optional</sup> <a name="redundant_device_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput"></a>

```python
redundant_device_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `redundant_device_id`<sup>Required</sup> <a name="redundant_device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId"></a>

```python
redundant_device_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualGatewayV2Config <a name="DcVirtualGatewayV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_id: str,
  asn: typing.Union[int, float] = None,
  description: str = None,
  device_id: str = None,
  id: str = None,
  local_ep_group: DcVirtualGatewayV2LocalEpGroup = None,
  local_ep_group_v6: DcVirtualGatewayV2LocalEpGroupV6 = None,
  project_id: str = None,
  redundant_device_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroup">local_ep_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | local_ep_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupV6">local_ep_group_v6</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | local_ep_group_v6 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId">redundant_device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_ep_group`<sup>Optional</sup> <a name="local_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroup"></a>

```python
local_ep_group: DcVirtualGatewayV2LocalEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

local_ep_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#local_ep_group DcVirtualGatewayV2#local_ep_group}

---

##### `local_ep_group_v6`<sup>Optional</sup> <a name="local_ep_group_v6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupV6"></a>

```python
local_ep_group_v6: DcVirtualGatewayV2LocalEpGroupV6
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

local_ep_group_v6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#local_ep_group_v6 DcVirtualGatewayV2#local_ep_group_v6}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}.

---

##### `redundant_device_id`<sup>Optional</sup> <a name="redundant_device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId"></a>

```python
redundant_device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}.

---

### DcVirtualGatewayV2LocalEpGroup <a name="DcVirtualGatewayV2LocalEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup(
  endpoints: typing.List[str],
  description: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

### DcVirtualGatewayV2LocalEpGroupV6 <a name="DcVirtualGatewayV2LocalEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6(
  endpoints: typing.List[str],
  description: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcVirtualGatewayV2LocalEpGroupOutputReference <a name="DcVirtualGatewayV2LocalEpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpointsInput">endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpointsInput"></a>

```python
endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.internalValue"></a>

```python
internal_value: DcVirtualGatewayV2LocalEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

---


### DcVirtualGatewayV2LocalEpGroupV6OutputReference <a name="DcVirtualGatewayV2LocalEpGroupV6OutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_gateway_v2

dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpointsInput">endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpointsInput"></a>

```python
endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.internalValue"></a>

```python
internal_value: DcVirtualGatewayV2LocalEpGroupV6
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

---



