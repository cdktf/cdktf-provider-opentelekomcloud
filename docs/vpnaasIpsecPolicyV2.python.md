# `opentelekomcloud_vpnaas_ipsec_policy_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpnaas_ipsec_policy_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2).

# `vpnaasIpsecPolicyV2` Submodule <a name="`vpnaasIpsecPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasIpsecPolicyV2 <a name="VpnaasIpsecPolicyV2" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2 opentelekomcloud_vpnaas_ipsec_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_algorithm: str = None,
  description: str = None,
  encapsulation_mode: str = None,
  encryption_algorithm: str = None,
  id: str = None,
  lifetime: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]] = None,
  name: str = None,
  pfs: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: VpnaasIpsecPolicyV2Timeouts = None,
  transform_protocol: str = None,
  value_specs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.authAlgorithm">auth_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.encapsulationMode">encapsulation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.lifetime">lifetime</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]</code> | lifetime block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.pfs">pfs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.transformProtocol">transform_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_algorithm`<sup>Optional</sup> <a name="auth_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.authAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}.

---

##### `encapsulation_mode`<sup>Optional</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.encapsulationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.encryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.lifetime"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]

lifetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#lifetime VpnaasIpsecPolicyV2#lifetime}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}.

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.pfs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#timeouts VpnaasIpsecPolicyV2#timeouts}

---

##### `transform_protocol`<sup>Optional</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.transformProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}.

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime">put_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetAuthAlgorithm">reset_auth_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncapsulationMode">reset_encapsulation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetLifetime">reset_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetPfs">reset_pfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTransformProtocol">reset_transform_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetValueSpecs">reset_value_specs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_lifetime` <a name="put_lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime"></a>

```python
def put_lifetime(
  value: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#create VpnaasIpsecPolicyV2#create}.

---

##### `reset_auth_algorithm` <a name="reset_auth_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetAuthAlgorithm"></a>

```python
def reset_auth_algorithm() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encapsulation_mode` <a name="reset_encapsulation_mode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncapsulationMode"></a>

```python
def reset_encapsulation_mode() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifetime` <a name="reset_lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetLifetime"></a>

```python
def reset_lifetime() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pfs` <a name="reset_pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetPfs"></a>

```python
def reset_pfs() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transform_protocol` <a name="reset_transform_protocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTransformProtocol"></a>

```python
def reset_transform_protocol() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetime">lifetime</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList">VpnaasIpsecPolicyV2LifetimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference">VpnaasIpsecPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithmInput">auth_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationModeInput">encapsulation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetimeInput">lifetime_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfsInput">pfs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocolInput">transform_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithm">auth_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationMode">encapsulation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfs">pfs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocol">transform_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetime"></a>

```python
lifetime: VpnaasIpsecPolicyV2LifetimeList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList">VpnaasIpsecPolicyV2LifetimeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeouts"></a>

```python
timeouts: VpnaasIpsecPolicyV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference">VpnaasIpsecPolicyV2TimeoutsOutputReference</a>

---

##### `auth_algorithm_input`<sup>Optional</sup> <a name="auth_algorithm_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithmInput"></a>

```python
auth_algorithm_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encapsulation_mode_input`<sup>Optional</sup> <a name="encapsulation_mode_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationModeInput"></a>

```python
encapsulation_mode_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetimeInput"></a>

```python
lifetime_input: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pfs_input`<sup>Optional</sup> <a name="pfs_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfsInput"></a>

```python
pfs_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpnaasIpsecPolicyV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>, cdktf.IResolvable]

---

##### `transform_protocol_input`<sup>Optional</sup> <a name="transform_protocol_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocolInput"></a>

```python
transform_protocol_input: str
```

- *Type:* str

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_algorithm`<sup>Required</sup> <a name="auth_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithm"></a>

```python
auth_algorithm: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encapsulation_mode`<sup>Required</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationMode"></a>

```python
encapsulation_mode: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfs"></a>

```python
pfs: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `transform_protocol`<sup>Required</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocol"></a>

```python
transform_protocol: str
```

- *Type:* str

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasIpsecPolicyV2Config <a name="VpnaasIpsecPolicyV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_algorithm: str = None,
  description: str = None,
  encapsulation_mode: str = None,
  encryption_algorithm: str = None,
  id: str = None,
  lifetime: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]] = None,
  name: str = None,
  pfs: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: VpnaasIpsecPolicyV2Timeouts = None,
  transform_protocol: str = None,
  value_specs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.authAlgorithm">auth_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encapsulationMode">encapsulation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifetime">lifetime</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]</code> | lifetime block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.pfs">pfs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.transformProtocol">transform_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_algorithm`<sup>Optional</sup> <a name="auth_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.authAlgorithm"></a>

```python
auth_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}.

---

##### `encapsulation_mode`<sup>Optional</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encapsulationMode"></a>

```python
encapsulation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifetime"></a>

```python
lifetime: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]

lifetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#lifetime VpnaasIpsecPolicyV2#lifetime}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}.

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.pfs"></a>

```python
pfs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.timeouts"></a>

```python
timeouts: VpnaasIpsecPolicyV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#timeouts VpnaasIpsecPolicyV2#timeouts}

---

##### `transform_protocol`<sup>Optional</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.transformProtocol"></a>

```python
transform_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}.

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}.

---

### VpnaasIpsecPolicyV2Lifetime <a name="VpnaasIpsecPolicyV2Lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime(
  units: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.units">units</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#units VpnaasIpsecPolicyV2#units}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value VpnaasIpsecPolicyV2#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.units"></a>

```python
units: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#units VpnaasIpsecPolicyV2#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#value VpnaasIpsecPolicyV2#value}.

---

### VpnaasIpsecPolicyV2Timeouts <a name="VpnaasIpsecPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#create VpnaasIpsecPolicyV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpnaas_ipsec_policy_v2#create VpnaasIpsecPolicyV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasIpsecPolicyV2LifetimeList <a name="VpnaasIpsecPolicyV2LifetimeList" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnaasIpsecPolicyV2LifetimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnaasIpsecPolicyV2Lifetime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>]]

---


### VpnaasIpsecPolicyV2LifetimeOutputReference <a name="VpnaasIpsecPolicyV2LifetimeOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetUnits">reset_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_units` <a name="reset_units" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnaasIpsecPolicyV2Lifetime, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>, cdktf.IResolvable]

---


### VpnaasIpsecPolicyV2TimeoutsOutputReference <a name="VpnaasIpsecPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_ipsec_policy_v2

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnaasIpsecPolicyV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>, cdktf.IResolvable]

---



