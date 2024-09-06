# `wafDedicatedDomainV1` Submodule <a name="`wafDedicatedDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedDomainV1 <a name="WafDedicatedDomainV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1 opentelekomcloud_waf_dedicated_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  server: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]],
  certificate_id: str = None,
  cipher: str = None,
  id: str = None,
  keep_policy: typing.Union[bool, IResolvable] = None,
  pci3_ds: typing.Union[bool, IResolvable] = None,
  pci_dss: typing.Union[bool, IResolvable] = None,
  policy_id: str = None,
  protect_status: typing.Union[int, float] = None,
  proxy: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeout_config: WafDedicatedDomainV1TimeoutConfig = None,
  tls: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.server">server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.cipher">cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.keepPolicy">keep_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pci3Ds">pci3_ds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pciDss">pci_dss</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.protectStatus">protect_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | timeout_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.tls">tls</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.server"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#server WafDedicatedDomainV1#server}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.cipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_policy`<sup>Optional</sup> <a name="keep_policy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.keepPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}.

---

##### `pci3_ds`<sup>Optional</sup> <a name="pci3_ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pci3Ds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}.

---

##### `pci_dss`<sup>Optional</sup> <a name="pci_dss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pciDss"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}.

---

##### `protect_status`<sup>Optional</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.protectStatus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.proxy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}.

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

timeout_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#timeout_config WafDedicatedDomainV1#timeout_config}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.tls"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer">put_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig">put_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher">reset_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy">reset_keep_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds">reset_pci3_ds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss">reset_pci_dss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus">reset_protect_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig">reset_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls">reset_tls</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_server` <a name="put_server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer"></a>

```python
def put_server(
  value: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]

---

##### `put_timeout_config` <a name="put_timeout_config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig"></a>

```python
def put_timeout_config(
  connect_timeout: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  send_timeout: typing.Union[int, float] = None
) -> None
```

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}.

---

###### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig.parameter.readTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}.

---

###### `send_timeout`<sup>Optional</sup> <a name="send_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig.parameter.sendTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}.

---

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_cipher` <a name="reset_cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher"></a>

```python
def reset_cipher() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keep_policy` <a name="reset_keep_policy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy"></a>

```python
def reset_keep_policy() -> None
```

##### `reset_pci3_ds` <a name="reset_pci3_ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds"></a>

```python
def reset_pci3_ds() -> None
```

##### `reset_pci_dss` <a name="reset_pci_dss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss"></a>

```python
def reset_pci_dss() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_protect_status` <a name="reset_protect_status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus"></a>

```python
def reset_protect_status() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeout_config` <a name="reset_timeout_config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig"></a>

```python
def reset_timeout_config() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls"></a>

```python
def reset_tls() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafDedicatedDomainV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafDedicatedDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus">access_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage">alarm_page</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification">compliance_certification</a></code> | <code>cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server">server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier">traffic_identifier</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput">cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput">keep_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput">pci3_ds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput">pci_dss_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput">protect_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput">proxy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput">server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput">timeout_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput">tls_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher">cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy">keep_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds">pci3_ds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss">pci_dss</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus">protect_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls">tls</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_status`<sup>Required</sup> <a name="access_status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus"></a>

```python
access_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_page`<sup>Required</sup> <a name="alarm_page" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage"></a>

```python
alarm_page: StringMap
```

- *Type:* cdktf.StringMap

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `compliance_certification`<sup>Required</sup> <a name="compliance_certification" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification"></a>

```python
compliance_certification: BooleanMap
```

- *Type:* cdktf.BooleanMap

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server"></a>

```python
server: WafDedicatedDomainV1ServerList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a>

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig"></a>

```python
timeout_config: WafDedicatedDomainV1TimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a>

---

##### `traffic_identifier`<sup>Required</sup> <a name="traffic_identifier" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier"></a>

```python
traffic_identifier: StringMap
```

- *Type:* cdktf.StringMap

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `cipher_input`<sup>Optional</sup> <a name="cipher_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput"></a>

```python
cipher_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keep_policy_input`<sup>Optional</sup> <a name="keep_policy_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput"></a>

```python
keep_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci3_ds_input`<sup>Optional</sup> <a name="pci3_ds_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput"></a>

```python
pci3_ds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_dss_input`<sup>Optional</sup> <a name="pci_dss_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput"></a>

```python
pci_dss_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `protect_status_input`<sup>Optional</sup> <a name="protect_status_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput"></a>

```python
protect_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput"></a>

```python
proxy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput"></a>

```python
server_input: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]

---

##### `timeout_config_input`<sup>Optional</sup> <a name="timeout_config_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput"></a>

```python
timeout_config_input: WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput"></a>

```python
tls_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `cipher`<sup>Required</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher"></a>

```python
cipher: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keep_policy`<sup>Required</sup> <a name="keep_policy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy"></a>

```python
keep_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci3_ds`<sup>Required</sup> <a name="pci3_ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds"></a>

```python
pci3_ds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_dss`<sup>Required</sup> <a name="pci_dss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss"></a>

```python
pci_dss: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus"></a>

```python
protect_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls"></a>

```python
tls: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedDomainV1Config <a name="WafDedicatedDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  server: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]],
  certificate_id: str = None,
  cipher: str = None,
  id: str = None,
  keep_policy: typing.Union[bool, IResolvable] = None,
  pci3_ds: typing.Union[bool, IResolvable] = None,
  pci_dss: typing.Union[bool, IResolvable] = None,
  policy_id: str = None,
  protect_status: typing.Union[int, float] = None,
  proxy: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeout_config: WafDedicatedDomainV1TimeoutConfig = None,
  tls: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server">server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher">cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy">keep_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds">pci3_ds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss">pci_dss</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus">protect_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | timeout_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls">tls</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server"></a>

```python
server: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#server WafDedicatedDomainV1#server}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher"></a>

```python
cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_policy`<sup>Optional</sup> <a name="keep_policy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy"></a>

```python
keep_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}.

---

##### `pci3_ds`<sup>Optional</sup> <a name="pci3_ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds"></a>

```python
pci3_ds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}.

---

##### `pci_dss`<sup>Optional</sup> <a name="pci_dss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss"></a>

```python
pci_dss: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}.

---

##### `protect_status`<sup>Optional</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus"></a>

```python
protect_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}.

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig"></a>

```python
timeout_config: WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

timeout_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#timeout_config WafDedicatedDomainV1#timeout_config}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls"></a>

```python
tls: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}.

---

### WafDedicatedDomainV1Server <a name="WafDedicatedDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1Server(
  address: str,
  client_protocol: str,
  port: typing.Union[int, float],
  server_protocol: str,
  type: str,
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol">client_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol">server_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}.

---

##### `client_protocol`<sup>Required</sup> <a name="client_protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}.

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}.

---

### WafDedicatedDomainV1TimeoutConfig <a name="WafDedicatedDomainV1TimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig(
  connect_timeout: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  send_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout">send_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}. |

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}.

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}.

---

##### `send_timeout`<sup>Optional</sup> <a name="send_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout"></a>

```python
send_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedDomainV1ServerList <a name="WafDedicatedDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1ServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafDedicatedDomainV1ServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafDedicatedDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]]

---


### WafDedicatedDomainV1ServerOutputReference <a name="WafDedicatedDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput">client_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput">server_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol">client_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol">server_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `client_protocol_input`<sup>Optional</sup> <a name="client_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```python
client_protocol_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_protocol_input`<sup>Optional</sup> <a name="server_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```python
server_protocol_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `client_protocol`<sup>Required</sup> <a name="client_protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafDedicatedDomainV1Server]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>]

---


### WafDedicatedDomainV1TimeoutConfigOutputReference <a name="WafDedicatedDomainV1TimeoutConfigOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_domain_v1

wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout">reset_read_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout">reset_send_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_read_timeout` <a name="reset_read_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout"></a>

```python
def reset_read_timeout() -> None
```

##### `reset_send_timeout` <a name="reset_send_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout"></a>

```python
def reset_send_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput">read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput">send_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout">send_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout_input`<sup>Optional</sup> <a name="read_timeout_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput"></a>

```python
read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_input`<sup>Optional</sup> <a name="send_timeout_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput"></a>

```python
send_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout`<sup>Required</sup> <a name="send_timeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout"></a>

```python
send_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---



