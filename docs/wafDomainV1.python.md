# `wafDomainV1` Submodule <a name="`wafDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDomainV1 <a name="WafDomainV1" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  proxy: typing.Union[bool, IResolvable],
  server: typing.Union[IResolvable, typing.List[WafDomainV1Server]],
  block_page: WafDomainV1BlockPage = None,
  certificate_id: str = None,
  cipher: str = None,
  id: str = None,
  policy_id: str = None,
  sip_header_list: typing.List[str] = None,
  sip_header_name: str = None,
  timeouts: WafDomainV1Timeouts = None,
  tls: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.server">server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.cipher">cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderList">sip_header_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderName">sip_header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.tls">tls</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.proxy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.server"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.blockPage"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.cipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `sip_header_list`<sup>Optional</sup> <a name="sip_header_list" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `sip_header_name`<sup>Optional</sup> <a name="sip_header_name" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.tls"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage">put_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer">put_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage">reset_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher">reset_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList">reset_sip_header_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName">reset_sip_header_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls">reset_tls</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_block_page` <a name="put_block_page" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage"></a>

```python
def put_block_page(
  template: str,
  content: str = None,
  content_type: str = None,
  redirect_url: str = None,
  status_code: str = None
) -> None
```

###### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.template"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#template WafDomainV1#template}.

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content WafDomainV1#content}.

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}.

---

###### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}.

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}.

---

##### `put_server` <a name="put_server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer"></a>

```python
def put_server(
  value: typing.Union[IResolvable, typing.List[WafDomainV1Server]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#create WafDomainV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#delete WafDomainV1#delete}.

---

##### `reset_block_page` <a name="reset_block_page" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage"></a>

```python
def reset_block_page() -> None
```

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_cipher` <a name="reset_cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher"></a>

```python
def reset_cipher() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_sip_header_list` <a name="reset_sip_header_list" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList"></a>

```python
def reset_sip_header_list() -> None
```

##### `reset_sip_header_name` <a name="reset_sip_header_name" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName"></a>

```python
def reset_sip_header_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls"></a>

```python
def reset_tls() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafDomainV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode">access_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus">access_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus">protect_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server">server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain">sub_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode">txt_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput">block_page_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput">cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput">proxy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput">server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput">sip_header_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput">sip_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput">tls_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher">cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList">sip_header_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName">sip_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls">tls</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_code`<sup>Required</sup> <a name="access_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode"></a>

```python
access_code: str
```

- *Type:* str

---

##### `access_status`<sup>Required</sup> <a name="access_status" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus"></a>

```python
access_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_page`<sup>Required</sup> <a name="block_page" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage"></a>

```python
block_page: WafDomainV1BlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus"></a>

```python
protect_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server"></a>

```python
server: WafDomainV1ServerList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a>

---

##### `sub_domain`<sup>Required</sup> <a name="sub_domain" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain"></a>

```python
sub_domain: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts"></a>

```python
timeouts: WafDomainV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a>

---

##### `txt_code`<sup>Required</sup> <a name="txt_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode"></a>

```python
txt_code: str
```

- *Type:* str

---

##### `block_page_input`<sup>Optional</sup> <a name="block_page_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput"></a>

```python
block_page_input: WafDomainV1BlockPage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `cipher_input`<sup>Optional</sup> <a name="cipher_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput"></a>

```python
cipher_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput"></a>

```python
proxy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput"></a>

```python
server_input: typing.Union[IResolvable, typing.List[WafDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]

---

##### `sip_header_list_input`<sup>Optional</sup> <a name="sip_header_list_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput"></a>

```python
sip_header_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sip_header_name_input`<sup>Optional</sup> <a name="sip_header_name_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput"></a>

```python
sip_header_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafDomainV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>]

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput"></a>

```python
tls_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `cipher`<sup>Required</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher"></a>

```python
cipher: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sip_header_list`<sup>Required</sup> <a name="sip_header_list" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList"></a>

```python
sip_header_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sip_header_name`<sup>Required</sup> <a name="sip_header_name" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName"></a>

```python
sip_header_name: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls"></a>

```python
tls: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafDomainV1BlockPage <a name="WafDomainV1BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1BlockPage(
  template: str,
  content: str = None,
  content_type: str = None,
  redirect_url: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template">template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#template WafDomainV1#template}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content WafDomainV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template"></a>

```python
template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#template WafDomainV1#template}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content WafDomainV1#content}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}.

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}.

---

### WafDomainV1Config <a name="WafDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  proxy: typing.Union[bool, IResolvable],
  server: typing.Union[IResolvable, typing.List[WafDomainV1Server]],
  block_page: WafDomainV1BlockPage = None,
  certificate_id: str = None,
  cipher: str = None,
  id: str = None,
  policy_id: str = None,
  sip_header_list: typing.List[str] = None,
  sip_header_name: str = None,
  timeouts: WafDomainV1Timeouts = None,
  tls: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy">proxy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server">server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher">cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList">sip_header_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName">sip_header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls">tls</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy"></a>

```python
proxy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server"></a>

```python
server: typing.Union[IResolvable, typing.List[WafDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage"></a>

```python
block_page: WafDomainV1BlockPage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher"></a>

```python
cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `sip_header_list`<sup>Optional</sup> <a name="sip_header_list" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList"></a>

```python
sip_header_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `sip_header_name`<sup>Optional</sup> <a name="sip_header_name" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName"></a>

```python
sip_header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts"></a>

```python
timeouts: WafDomainV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls"></a>

```python
tls: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

### WafDomainV1Server <a name="WafDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1Server(
  address: str,
  port: str,
  back_protocol: str = None,
  client_protocol: str = None,
  front_protocol: str = None,
  server_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#address WafDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#port WafDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol">back_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol">client_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol">front_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol">server_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#address WafDomainV1#address}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#port WafDomainV1#port}.

---

##### `back_protocol`<sup>Optional</sup> <a name="back_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol"></a>

```python
back_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}.

---

##### `client_protocol`<sup>Optional</sup> <a name="client_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}.

---

##### `front_protocol`<sup>Optional</sup> <a name="front_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol"></a>

```python
front_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}.

---

##### `server_protocol`<sup>Optional</sup> <a name="server_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}.

---

### WafDomainV1Timeouts <a name="WafDomainV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#create WafDomainV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#delete WafDomainV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#create WafDomainV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/waf_domain_v1#delete WafDomainV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDomainV1BlockPageOutputReference <a name="WafDomainV1BlockPageOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1BlockPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue"></a>

```python
internal_value: WafDomainV1BlockPage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---


### WafDomainV1ServerList <a name="WafDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1ServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafDomainV1ServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafDomainV1Server]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]]

---


### WafDomainV1ServerOutputReference <a name="WafDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1ServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol">reset_back_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol">reset_client_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol">reset_front_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol">reset_server_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_back_protocol` <a name="reset_back_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol"></a>

```python
def reset_back_protocol() -> None
```

##### `reset_client_protocol` <a name="reset_client_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol"></a>

```python
def reset_client_protocol() -> None
```

##### `reset_front_protocol` <a name="reset_front_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol"></a>

```python
def reset_front_protocol() -> None
```

##### `reset_server_protocol` <a name="reset_server_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol"></a>

```python
def reset_server_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput">back_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput">client_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput">front_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput">server_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol">back_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol">client_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol">front_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol">server_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `back_protocol_input`<sup>Optional</sup> <a name="back_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput"></a>

```python
back_protocol_input: str
```

- *Type:* str

---

##### `client_protocol_input`<sup>Optional</sup> <a name="client_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```python
client_protocol_input: str
```

- *Type:* str

---

##### `front_protocol_input`<sup>Optional</sup> <a name="front_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput"></a>

```python
front_protocol_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `server_protocol_input`<sup>Optional</sup> <a name="server_protocol_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```python
server_protocol_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `back_protocol`<sup>Required</sup> <a name="back_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol"></a>

```python
back_protocol: str
```

- *Type:* str

---

##### `client_protocol`<sup>Required</sup> <a name="client_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

---

##### `front_protocol`<sup>Required</sup> <a name="front_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol"></a>

```python
front_protocol: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafDomainV1Server]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>]

---


### WafDomainV1TimeoutsOutputReference <a name="WafDomainV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_domain_v1

wafDomainV1.WafDomainV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafDomainV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>]

---



