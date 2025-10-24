# `asmServiceMeshV1` Submodule <a name="`asmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsmServiceMeshV1 <a name="AsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  clusters: IResolvable | typing.List[AsmServiceMeshV1Clusters],
  name: str,
  type: str,
  version: str,
  id: str = None,
  ipv6_enable: bool | IResolvable = None,
  proxy_config: AsmServiceMeshV1ProxyConfig = None,
  telemetry_config_tracing: AsmServiceMeshV1TelemetryConfigTracing = None,
  timeouts: AsmServiceMeshV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.clusters">clusters</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]</code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.ipv6Enable">ipv6_enable</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.telemetryConfigTracing">telemetry_config_tracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.clusters"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_enable`<sup>Optional</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.ipv6Enable"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `telemetry_config_tracing`<sup>Optional</sup> <a name="telemetry_config_tracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.telemetryConfigTracing"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters">put_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing">put_telemetry_config_tracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable">reset_ipv6_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing">reset_telemetry_config_tracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_clusters` <a name="put_clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters"></a>

```python
def put_clusters(
  value: IResolvable | typing.List[AsmServiceMeshV1Clusters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig"></a>

```python
def put_proxy_config(
  exclude_inbound_ports: str = None,
  exclude_ip_ranges: str = None,
  exclude_outbound_ports: str = None,
  include_inbound_ports: str = None,
  include_ip_ranges: str = None,
  include_outbound_ports: str = None
) -> None
```

###### `exclude_inbound_ports`<sup>Optional</sup> <a name="exclude_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.excludeInboundPorts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}.

---

###### `exclude_ip_ranges`<sup>Optional</sup> <a name="exclude_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.excludeIpRanges"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}.

---

###### `exclude_outbound_ports`<sup>Optional</sup> <a name="exclude_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.excludeOutboundPorts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}.

---

###### `include_inbound_ports`<sup>Optional</sup> <a name="include_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.includeInboundPorts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}.

---

###### `include_ip_ranges`<sup>Optional</sup> <a name="include_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.includeIpRanges"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}.

---

###### `include_outbound_ports`<sup>Optional</sup> <a name="include_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.includeOutboundPorts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}.

---

##### `put_telemetry_config_tracing` <a name="put_telemetry_config_tracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing"></a>

```python
def put_telemetry_config_tracing(
  default_providers: typing.List[str] = None,
  extension_providers: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders] = None,
  random_sampling_percentage: typing.Union[int, float] = None
) -> None
```

###### `default_providers`<sup>Optional</sup> <a name="default_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.defaultProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}.

---

###### `extension_providers`<sup>Optional</sup> <a name="extension_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.extensionProviders"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]

extension_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}

---

###### `random_sampling_percentage`<sup>Optional</sup> <a name="random_sampling_percentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.randomSamplingPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_enable` <a name="reset_ipv6_enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable"></a>

```python
def reset_ipv6_enable() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_telemetry_config_tracing` <a name="reset_telemetry_config_tracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing"></a>

```python
def reset_telemetry_config_tracing() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AsmServiceMeshV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds">cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters">clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing">telemetry_config_tracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput">clusters_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput">ipv6_enable_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput">telemetry_config_tracing_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable">ipv6_enable</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cluster_ids`<sup>Required</sup> <a name="cluster_ids" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds"></a>

```python
cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters"></a>

```python
clusters: AsmServiceMeshV1ClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig"></a>

```python
proxy_config: AsmServiceMeshV1ProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `telemetry_config_tracing`<sup>Required</sup> <a name="telemetry_config_tracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing"></a>

```python
telemetry_config_tracing: AsmServiceMeshV1TelemetryConfigTracingOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts"></a>

```python
timeouts: AsmServiceMeshV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a>

---

##### `clusters_input`<sup>Optional</sup> <a name="clusters_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput"></a>

```python
clusters_input: IResolvable | typing.List[AsmServiceMeshV1Clusters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_enable_input`<sup>Optional</sup> <a name="ipv6_enable_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput"></a>

```python
ipv6_enable_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput"></a>

```python
proxy_config_input: AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `telemetry_config_tracing_input`<sup>Optional</sup> <a name="telemetry_config_tracing_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput"></a>

```python
telemetry_config_tracing_input: AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AsmServiceMeshV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_enable`<sup>Required</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable"></a>

```python
ipv6_enable: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AsmServiceMeshV1Clusters <a name="AsmServiceMeshV1Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1Clusters(
  cluster_id: str,
  installation_nodes: typing.List[str],
  injection_namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes">installation_nodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces">injection_namespaces</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}. |

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}.

---

##### `installation_nodes`<sup>Required</sup> <a name="installation_nodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes"></a>

```python
installation_nodes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}.

---

##### `injection_namespaces`<sup>Optional</sup> <a name="injection_namespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces"></a>

```python
injection_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}.

---

### AsmServiceMeshV1Config <a name="AsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  clusters: IResolvable | typing.List[AsmServiceMeshV1Clusters],
  name: str,
  type: str,
  version: str,
  id: str = None,
  ipv6_enable: bool | IResolvable = None,
  proxy_config: AsmServiceMeshV1ProxyConfig = None,
  telemetry_config_tracing: AsmServiceMeshV1TelemetryConfigTracing = None,
  timeouts: AsmServiceMeshV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters">clusters</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]</code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable">ipv6_enable</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing">telemetry_config_tracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters"></a>

```python
clusters: IResolvable | typing.List[AsmServiceMeshV1Clusters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_enable`<sup>Optional</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable"></a>

```python
ipv6_enable: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig"></a>

```python
proxy_config: AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `telemetry_config_tracing`<sup>Optional</sup> <a name="telemetry_config_tracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing"></a>

```python
telemetry_config_tracing: AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts"></a>

```python
timeouts: AsmServiceMeshV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

### AsmServiceMeshV1ProxyConfig <a name="AsmServiceMeshV1ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1ProxyConfig(
  exclude_inbound_ports: str = None,
  exclude_ip_ranges: str = None,
  exclude_outbound_ports: str = None,
  include_inbound_ports: str = None,
  include_ip_ranges: str = None,
  include_outbound_ports: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts">exclude_inbound_ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges">exclude_ip_ranges</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts">exclude_outbound_ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts">include_inbound_ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges">include_ip_ranges</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts">include_outbound_ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}. |

---

##### `exclude_inbound_ports`<sup>Optional</sup> <a name="exclude_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts"></a>

```python
exclude_inbound_ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}.

---

##### `exclude_ip_ranges`<sup>Optional</sup> <a name="exclude_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges"></a>

```python
exclude_ip_ranges: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}.

---

##### `exclude_outbound_ports`<sup>Optional</sup> <a name="exclude_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts"></a>

```python
exclude_outbound_ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}.

---

##### `include_inbound_ports`<sup>Optional</sup> <a name="include_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts"></a>

```python
include_inbound_ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}.

---

##### `include_ip_ranges`<sup>Optional</sup> <a name="include_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges"></a>

```python
include_ip_ranges: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}.

---

##### `include_outbound_ports`<sup>Optional</sup> <a name="include_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts"></a>

```python
include_outbound_ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}.

---

### AsmServiceMeshV1TelemetryConfigTracing <a name="AsmServiceMeshV1TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing(
  default_providers: typing.List[str] = None,
  extension_providers: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders] = None,
  random_sampling_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders">default_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders">extension_providers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]</code> | extension_providers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage">random_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}. |

---

##### `default_providers`<sup>Optional</sup> <a name="default_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders"></a>

```python
default_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}.

---

##### `extension_providers`<sup>Optional</sup> <a name="extension_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders"></a>

```python
extension_providers: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]

extension_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}

---

##### `random_sampling_percentage`<sup>Optional</sup> <a name="random_sampling_percentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage"></a>

```python
random_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}.

---

### AsmServiceMeshV1TelemetryConfigTracingExtensionProviders <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders(
  name: str = None,
  zipkin_service_addr: str = None,
  zipkin_service_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr">zipkin_service_addr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort">zipkin_service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `zipkin_service_addr`<sup>Optional</sup> <a name="zipkin_service_addr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr"></a>

```python
zipkin_service_addr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}.

---

##### `zipkin_service_port`<sup>Optional</sup> <a name="zipkin_service_port" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort"></a>

```python
zipkin_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}.

---

### AsmServiceMeshV1Timeouts <a name="AsmServiceMeshV1Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsmServiceMeshV1ClustersList <a name="AsmServiceMeshV1ClustersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1ClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsmServiceMeshV1ClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AsmServiceMeshV1Clusters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>]

---


### AsmServiceMeshV1ClustersOutputReference <a name="AsmServiceMeshV1ClustersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces">reset_injection_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_injection_namespaces` <a name="reset_injection_namespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces"></a>

```python
def reset_injection_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput">injection_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput">installation_nodes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces">injection_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes">installation_nodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `injection_namespaces_input`<sup>Optional</sup> <a name="injection_namespaces_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput"></a>

```python
injection_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `installation_nodes_input`<sup>Optional</sup> <a name="installation_nodes_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput"></a>

```python
installation_nodes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `injection_namespaces`<sup>Required</sup> <a name="injection_namespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces"></a>

```python
injection_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `installation_nodes`<sup>Required</sup> <a name="installation_nodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes"></a>

```python
installation_nodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AsmServiceMeshV1Clusters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>

---


### AsmServiceMeshV1ProxyConfigOutputReference <a name="AsmServiceMeshV1ProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts">reset_exclude_inbound_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges">reset_exclude_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts">reset_exclude_outbound_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts">reset_include_inbound_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges">reset_include_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts">reset_include_outbound_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_inbound_ports` <a name="reset_exclude_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts"></a>

```python
def reset_exclude_inbound_ports() -> None
```

##### `reset_exclude_ip_ranges` <a name="reset_exclude_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges"></a>

```python
def reset_exclude_ip_ranges() -> None
```

##### `reset_exclude_outbound_ports` <a name="reset_exclude_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts"></a>

```python
def reset_exclude_outbound_ports() -> None
```

##### `reset_include_inbound_ports` <a name="reset_include_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts"></a>

```python
def reset_include_inbound_ports() -> None
```

##### `reset_include_ip_ranges` <a name="reset_include_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges"></a>

```python
def reset_include_ip_ranges() -> None
```

##### `reset_include_outbound_ports` <a name="reset_include_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts"></a>

```python
def reset_include_outbound_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput">exclude_inbound_ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput">exclude_ip_ranges_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput">exclude_outbound_ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput">include_inbound_ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput">include_ip_ranges_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput">include_outbound_ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts">exclude_inbound_ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges">exclude_ip_ranges</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts">exclude_outbound_ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts">include_inbound_ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges">include_ip_ranges</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts">include_outbound_ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_inbound_ports_input`<sup>Optional</sup> <a name="exclude_inbound_ports_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput"></a>

```python
exclude_inbound_ports_input: str
```

- *Type:* str

---

##### `exclude_ip_ranges_input`<sup>Optional</sup> <a name="exclude_ip_ranges_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput"></a>

```python
exclude_ip_ranges_input: str
```

- *Type:* str

---

##### `exclude_outbound_ports_input`<sup>Optional</sup> <a name="exclude_outbound_ports_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput"></a>

```python
exclude_outbound_ports_input: str
```

- *Type:* str

---

##### `include_inbound_ports_input`<sup>Optional</sup> <a name="include_inbound_ports_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput"></a>

```python
include_inbound_ports_input: str
```

- *Type:* str

---

##### `include_ip_ranges_input`<sup>Optional</sup> <a name="include_ip_ranges_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput"></a>

```python
include_ip_ranges_input: str
```

- *Type:* str

---

##### `include_outbound_ports_input`<sup>Optional</sup> <a name="include_outbound_ports_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput"></a>

```python
include_outbound_ports_input: str
```

- *Type:* str

---

##### `exclude_inbound_ports`<sup>Required</sup> <a name="exclude_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts"></a>

```python
exclude_inbound_ports: str
```

- *Type:* str

---

##### `exclude_ip_ranges`<sup>Required</sup> <a name="exclude_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges"></a>

```python
exclude_ip_ranges: str
```

- *Type:* str

---

##### `exclude_outbound_ports`<sup>Required</sup> <a name="exclude_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```python
exclude_outbound_ports: str
```

- *Type:* str

---

##### `include_inbound_ports`<sup>Required</sup> <a name="include_inbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts"></a>

```python
include_inbound_ports: str
```

- *Type:* str

---

##### `include_ip_ranges`<sup>Required</sup> <a name="include_ip_ranges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges"></a>

```python
include_ip_ranges: str
```

- *Type:* str

---

##### `include_outbound_ports`<sup>Required</sup> <a name="include_outbound_ports" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts"></a>

```python
include_outbound_ports: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr">reset_zipkin_service_addr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort">reset_zipkin_service_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_zipkin_service_addr` <a name="reset_zipkin_service_addr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr"></a>

```python
def reset_zipkin_service_addr() -> None
```

##### `reset_zipkin_service_port` <a name="reset_zipkin_service_port" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort"></a>

```python
def reset_zipkin_service_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput">zipkin_service_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput">zipkin_service_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">zipkin_service_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">zipkin_service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `zipkin_service_addr_input`<sup>Optional</sup> <a name="zipkin_service_addr_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput"></a>

```python
zipkin_service_addr_input: str
```

- *Type:* str

---

##### `zipkin_service_port_input`<sup>Optional</sup> <a name="zipkin_service_port_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput"></a>

```python
zipkin_service_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `zipkin_service_addr`<sup>Required</sup> <a name="zipkin_service_addr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```python
zipkin_service_addr: str
```

- *Type:* str

---

##### `zipkin_service_port`<sup>Required</sup> <a name="zipkin_service_port" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```python
zipkin_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AsmServiceMeshV1TelemetryConfigTracingExtensionProviders
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>

---


### AsmServiceMeshV1TelemetryConfigTracingOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders">put_extension_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders">reset_default_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders">reset_extension_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage">reset_random_sampling_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extension_providers` <a name="put_extension_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders"></a>

```python
def put_extension_providers(
  value: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]

---

##### `reset_default_providers` <a name="reset_default_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders"></a>

```python
def reset_default_providers() -> None
```

##### `reset_extension_providers` <a name="reset_extension_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders"></a>

```python
def reset_extension_providers() -> None
```

##### `reset_random_sampling_percentage` <a name="reset_random_sampling_percentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage"></a>

```python
def reset_random_sampling_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders">extension_providers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput">default_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput">extension_providers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput">random_sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders">default_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage">random_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_providers`<sup>Required</sup> <a name="extension_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```python
extension_providers: AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a>

---

##### `default_providers_input`<sup>Optional</sup> <a name="default_providers_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput"></a>

```python
default_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extension_providers_input`<sup>Optional</sup> <a name="extension_providers_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput"></a>

```python
extension_providers_input: IResolvable | typing.List[AsmServiceMeshV1TelemetryConfigTracingExtensionProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>]

---

##### `random_sampling_percentage_input`<sup>Optional</sup> <a name="random_sampling_percentage_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput"></a>

```python
random_sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_providers`<sup>Required</sup> <a name="default_providers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```python
default_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `random_sampling_percentage`<sup>Required</sup> <a name="random_sampling_percentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```python
random_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue"></a>

```python
internal_value: AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---


### AsmServiceMeshV1TimeoutsOutputReference <a name="AsmServiceMeshV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import asm_service_mesh_v1

asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AsmServiceMeshV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---



