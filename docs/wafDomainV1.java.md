# `wafDomainV1` Submodule <a name="`wafDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDomainV1 <a name="WafDomainV1" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1;

WafDomainV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hostname(java.lang.String)
    .proxy(java.lang.Boolean)
    .proxy(IResolvable)
    .server(IResolvable)
    .server(java.util.List<WafDomainV1Server>)
//  .blockPage(WafDomainV1BlockPage)
//  .certificateId(java.lang.String)
//  .cipher(java.lang.String)
//  .id(java.lang.String)
//  .policyId(java.lang.String)
//  .sipHeaderList(java.util.List<java.lang.String>)
//  .sipHeaderName(java.lang.String)
//  .timeouts(WafDomainV1Timeouts)
//  .tls(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.server">server</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>></code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.cipher">cipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderList">sipHeaderList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderName">sipHeaderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.tls">tls</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.proxy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.server"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.blockPage"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.cipher"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `sipHeaderList`<sup>Optional</sup> <a name="sipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `sipHeaderName`<sup>Optional</sup> <a name="sipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.sipHeaderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.tls"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage">putBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer">putServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage">resetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher">resetCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList">resetSipHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName">resetSipHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls">resetTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockPage` <a name="putBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage"></a>

```java
public void putBlockPage(WafDomainV1BlockPage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `putServer` <a name="putServer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer"></a>

```java
public void putServer(IResolvable OR java.util.List<WafDomainV1Server> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts"></a>

```java
public void putTimeouts(WafDomainV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---

##### `resetBlockPage` <a name="resetBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage"></a>

```java
public void resetBlockPage()
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetCipher` <a name="resetCipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher"></a>

```java
public void resetCipher()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetSipHeaderList` <a name="resetSipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList"></a>

```java
public void resetSipHeaderList()
```

##### `resetSipHeaderName` <a name="resetSipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName"></a>

```java
public void resetSipHeaderName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls"></a>

```java
public void resetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1;

WafDomainV1.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1;

WafDomainV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1;

WafDomainV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1;

WafDomainV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafDomainV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafDomainV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode">accessCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus">accessStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus">protectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server">server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain">subDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode">txtCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput">blockPageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput">cipherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput">proxyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput">serverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput">sipHeaderListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput">sipHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput">tlsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher">cipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList">sipHeaderList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName">sipHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls">tls</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessCode`<sup>Required</sup> <a name="accessCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode"></a>

```java
public java.lang.String getAccessCode();
```

- *Type:* java.lang.String

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus"></a>

```java
public java.lang.Number getAccessStatus();
```

- *Type:* java.lang.Number

---

##### `blockPage`<sup>Required</sup> <a name="blockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage"></a>

```java
public WafDomainV1BlockPageOutputReference getBlockPage();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus"></a>

```java
public java.lang.Number getProtectStatus();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server"></a>

```java
public WafDomainV1ServerList getServer();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a>

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain"></a>

```java
public java.lang.String getSubDomain();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts"></a>

```java
public WafDomainV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a>

---

##### `txtCode`<sup>Required</sup> <a name="txtCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode"></a>

```java
public java.lang.String getTxtCode();
```

- *Type:* java.lang.String

---

##### `blockPageInput`<sup>Optional</sup> <a name="blockPageInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput"></a>

```java
public WafDomainV1BlockPage getBlockPageInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `cipherInput`<sup>Optional</sup> <a name="cipherInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput"></a>

```java
public java.lang.String getCipherInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput"></a>

```java
public java.lang.Object getProxyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput"></a>

```java
public java.lang.Object getServerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>>

---

##### `sipHeaderListInput`<sup>Optional</sup> <a name="sipHeaderListInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput"></a>

```java
public java.util.List<java.lang.String> getSipHeaderListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sipHeaderNameInput`<sup>Optional</sup> <a name="sipHeaderNameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput"></a>

```java
public java.lang.String getSipHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput"></a>

```java
public java.lang.String getTlsInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `cipher`<sup>Required</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher"></a>

```java
public java.lang.String getCipher();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sipHeaderList`<sup>Required</sup> <a name="sipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList"></a>

```java
public java.util.List<java.lang.String> getSipHeaderList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sipHeaderName`<sup>Required</sup> <a name="sipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName"></a>

```java
public java.lang.String getSipHeaderName();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafDomainV1BlockPage <a name="WafDomainV1BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1BlockPage;

WafDomainV1BlockPage.builder()
    .template(java.lang.String)
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#template WafDomainV1#template}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#content WafDomainV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#template WafDomainV1#template}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#content WafDomainV1#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}.

---

### WafDomainV1Config <a name="WafDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1Config;

WafDomainV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hostname(java.lang.String)
    .proxy(java.lang.Boolean)
    .proxy(IResolvable)
    .server(IResolvable)
    .server(java.util.List<WafDomainV1Server>)
//  .blockPage(WafDomainV1BlockPage)
//  .certificateId(java.lang.String)
//  .cipher(java.lang.String)
//  .id(java.lang.String)
//  .policyId(java.lang.String)
//  .sipHeaderList(java.util.List<java.lang.String>)
//  .sipHeaderName(java.lang.String)
//  .timeouts(WafDomainV1Timeouts)
//  .tls(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server">server</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>></code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher">cipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList">sipHeaderList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName">sipHeaderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls">tls</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server"></a>

```java
public java.lang.Object getServer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage"></a>

```java
public WafDomainV1BlockPage getBlockPage();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher"></a>

```java
public java.lang.String getCipher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `sipHeaderList`<sup>Optional</sup> <a name="sipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList"></a>

```java
public java.util.List<java.lang.String> getSipHeaderList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `sipHeaderName`<sup>Optional</sup> <a name="sipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName"></a>

```java
public java.lang.String getSipHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts"></a>

```java
public WafDomainV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

### WafDomainV1Server <a name="WafDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1Server;

WafDomainV1Server.builder()
    .address(java.lang.String)
    .port(java.lang.String)
//  .backProtocol(java.lang.String)
//  .clientProtocol(java.lang.String)
//  .frontProtocol(java.lang.String)
//  .serverProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#address WafDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#port WafDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol">backProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol">frontProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#address WafDomainV1#address}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#port WafDomainV1#port}.

---

##### `backProtocol`<sup>Optional</sup> <a name="backProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol"></a>

```java
public java.lang.String getBackProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}.

---

##### `frontProtocol`<sup>Optional</sup> <a name="frontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol"></a>

```java
public java.lang.String getFrontProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}.

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}.

---

### WafDomainV1Timeouts <a name="WafDomainV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1Timeouts;

WafDomainV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#create WafDomainV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#delete WafDomainV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#create WafDomainV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.8/docs/resources/waf_domain_v1#delete WafDomainV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDomainV1BlockPageOutputReference <a name="WafDomainV1BlockPageOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1BlockPageOutputReference;

new WafDomainV1BlockPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue"></a>

```java
public WafDomainV1BlockPage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---


### WafDomainV1ServerList <a name="WafDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1ServerList;

new WafDomainV1ServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get"></a>

```java
public WafDomainV1ServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>>

---


### WafDomainV1ServerOutputReference <a name="WafDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1ServerOutputReference;

new WafDomainV1ServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol">resetBackProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol">resetFrontProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol">resetServerProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackProtocol` <a name="resetBackProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol"></a>

```java
public void resetBackProtocol()
```

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol"></a>

```java
public void resetClientProtocol()
```

##### `resetFrontProtocol` <a name="resetFrontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol"></a>

```java
public void resetFrontProtocol()
```

##### `resetServerProtocol` <a name="resetServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol"></a>

```java
public void resetServerProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput">backProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput">clientProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput">frontProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput">serverProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol">backProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol">frontProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `backProtocolInput`<sup>Optional</sup> <a name="backProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput"></a>

```java
public java.lang.String getBackProtocolInput();
```

- *Type:* java.lang.String

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```java
public java.lang.String getClientProtocolInput();
```

- *Type:* java.lang.String

---

##### `frontProtocolInput`<sup>Optional</sup> <a name="frontProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput"></a>

```java
public java.lang.String getFrontProtocolInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```java
public java.lang.String getServerProtocolInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `backProtocol`<sup>Required</sup> <a name="backProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol"></a>

```java
public java.lang.String getBackProtocol();
```

- *Type:* java.lang.String

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

---

##### `frontProtocol`<sup>Required</sup> <a name="frontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol"></a>

```java
public java.lang.String getFrontProtocol();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>

---


### WafDomainV1TimeoutsOutputReference <a name="WafDomainV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_domain_v1.WafDomainV1TimeoutsOutputReference;

new WafDomainV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---



