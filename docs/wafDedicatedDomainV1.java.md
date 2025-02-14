# `wafDedicatedDomainV1` Submodule <a name="`wafDedicatedDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedDomainV1 <a name="WafDedicatedDomainV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1 opentelekomcloud_waf_dedicated_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1;

WafDedicatedDomainV1.Builder.create(Construct scope, java.lang.String id)
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
    .domain(java.lang.String)
    .server(IResolvable)
    .server(java.util.List<WafDedicatedDomainV1Server>)
//  .certificateId(java.lang.String)
//  .cipher(java.lang.String)
//  .id(java.lang.String)
//  .keepPolicy(java.lang.Boolean)
//  .keepPolicy(IResolvable)
//  .pci3Ds(java.lang.Boolean)
//  .pci3Ds(IResolvable)
//  .pciDss(java.lang.Boolean)
//  .pciDss(IResolvable)
//  .policyId(java.lang.String)
//  .protectStatus(java.lang.Number)
//  .proxy(java.lang.Boolean)
//  .proxy(IResolvable)
//  .region(java.lang.String)
//  .timeoutConfig(WafDedicatedDomainV1TimeoutConfig)
//  .tls(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.server">server</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>></code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.cipher">cipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.keepPolicy">keepPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pci3Ds">pci3Ds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pciDss">pciDss</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.protectStatus">protectStatus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | timeout_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.tls">tls</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.server"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#server WafDedicatedDomainV1#server}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.cipher"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepPolicy`<sup>Optional</sup> <a name="keepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.keepPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}.

---

##### `pci3Ds`<sup>Optional</sup> <a name="pci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pci3Ds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}.

---

##### `pciDss`<sup>Optional</sup> <a name="pciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.pciDss"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}.

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.protectStatus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.proxy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}.

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

timeout_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#timeout_config WafDedicatedDomainV1#timeout_config}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.tls"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer">putServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher">resetCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy">resetKeepPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds">resetPci3Ds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss">resetPciDss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls">resetTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServer` <a name="putServer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer"></a>

```java
public void putServer(IResolvable OR java.util.List<WafDedicatedDomainV1Server> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>>

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig"></a>

```java
public void putTimeoutConfig(WafDedicatedDomainV1TimeoutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetCipher` <a name="resetCipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher"></a>

```java
public void resetCipher()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId"></a>

```java
public void resetId()
```

##### `resetKeepPolicy` <a name="resetKeepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy"></a>

```java
public void resetKeepPolicy()
```

##### `resetPci3Ds` <a name="resetPci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds"></a>

```java
public void resetPci3Ds()
```

##### `resetPciDss` <a name="resetPciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss"></a>

```java
public void resetPciDss()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus"></a>

```java
public void resetProtectStatus()
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy"></a>

```java
public void resetProxy()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig"></a>

```java
public void resetTimeoutConfig()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls"></a>

```java
public void resetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1;

WafDedicatedDomainV1.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1;

WafDedicatedDomainV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1;

WafDedicatedDomainV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1;

WafDedicatedDomainV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafDedicatedDomainV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafDedicatedDomainV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafDedicatedDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus">accessStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage">alarmPage</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification">complianceCertification</a></code> | <code>com.hashicorp.cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server">server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier">trafficIdentifier</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput">cipherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput">keepPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput">pci3DsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput">pciDssInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput">protectStatusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput">proxyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput">serverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput">tlsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher">cipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy">keepPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds">pci3Ds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss">pciDss</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus">protectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls">tls</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus"></a>

```java
public java.lang.Number getAccessStatus();
```

- *Type:* java.lang.Number

---

##### `alarmPage`<sup>Required</sup> <a name="alarmPage" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage"></a>

```java
public StringMap getAlarmPage();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `complianceCertification`<sup>Required</sup> <a name="complianceCertification" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification"></a>

```java
public BooleanMap getComplianceCertification();
```

- *Type:* com.hashicorp.cdktf.BooleanMap

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server"></a>

```java
public WafDedicatedDomainV1ServerList getServer();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig"></a>

```java
public WafDedicatedDomainV1TimeoutConfigOutputReference getTimeoutConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a>

---

##### `trafficIdentifier`<sup>Required</sup> <a name="trafficIdentifier" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier"></a>

```java
public StringMap getTrafficIdentifier();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `cipherInput`<sup>Optional</sup> <a name="cipherInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput"></a>

```java
public java.lang.String getCipherInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keepPolicyInput`<sup>Optional</sup> <a name="keepPolicyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput"></a>

```java
public java.lang.Object getKeepPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pci3DsInput`<sup>Optional</sup> <a name="pci3DsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput"></a>

```java
public java.lang.Object getPci3DsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciDssInput`<sup>Optional</sup> <a name="pciDssInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput"></a>

```java
public java.lang.Object getPciDssInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput"></a>

```java
public java.lang.Number getProtectStatusInput();
```

- *Type:* java.lang.Number

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput"></a>

```java
public java.lang.Object getProxyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput"></a>

```java
public java.lang.Object getServerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>>

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput"></a>

```java
public WafDedicatedDomainV1TimeoutConfig getTimeoutConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput"></a>

```java
public java.lang.String getTlsInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `cipher`<sup>Required</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher"></a>

```java
public java.lang.String getCipher();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keepPolicy`<sup>Required</sup> <a name="keepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy"></a>

```java
public java.lang.Object getKeepPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pci3Ds`<sup>Required</sup> <a name="pci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds"></a>

```java
public java.lang.Object getPci3Ds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciDss`<sup>Required</sup> <a name="pciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss"></a>

```java
public java.lang.Object getPciDss();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus"></a>

```java
public java.lang.Number getProtectStatus();
```

- *Type:* java.lang.Number

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedDomainV1Config <a name="WafDedicatedDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1Config;

WafDedicatedDomainV1Config.builder()
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
    .domain(java.lang.String)
    .server(IResolvable)
    .server(java.util.List<WafDedicatedDomainV1Server>)
//  .certificateId(java.lang.String)
//  .cipher(java.lang.String)
//  .id(java.lang.String)
//  .keepPolicy(java.lang.Boolean)
//  .keepPolicy(IResolvable)
//  .pci3Ds(java.lang.Boolean)
//  .pci3Ds(IResolvable)
//  .pciDss(java.lang.Boolean)
//  .pciDss(IResolvable)
//  .policyId(java.lang.String)
//  .protectStatus(java.lang.Number)
//  .proxy(java.lang.Boolean)
//  .proxy(IResolvable)
//  .region(java.lang.String)
//  .timeoutConfig(WafDedicatedDomainV1TimeoutConfig)
//  .tls(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server">server</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>></code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher">cipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy">keepPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds">pci3Ds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss">pciDss</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus">protectStatus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy">proxy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | timeout_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls">tls</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server"></a>

```java
public java.lang.Object getServer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#server WafDedicatedDomainV1#server}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher"></a>

```java
public java.lang.String getCipher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepPolicy`<sup>Optional</sup> <a name="keepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy"></a>

```java
public java.lang.Object getKeepPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}.

---

##### `pci3Ds`<sup>Optional</sup> <a name="pci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds"></a>

```java
public java.lang.Object getPci3Ds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}.

---

##### `pciDss`<sup>Optional</sup> <a name="pciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss"></a>

```java
public java.lang.Object getPciDss();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}.

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus"></a>

```java
public java.lang.Number getProtectStatus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}.

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig"></a>

```java
public WafDedicatedDomainV1TimeoutConfig getTimeoutConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

timeout_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#timeout_config WafDedicatedDomainV1#timeout_config}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}.

---

### WafDedicatedDomainV1Server <a name="WafDedicatedDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1Server;

WafDedicatedDomainV1Server.builder()
    .address(java.lang.String)
    .clientProtocol(java.lang.String)
    .port(java.lang.Number)
    .serverProtocol(java.lang.String)
    .type(java.lang.String)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}.

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}.

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}.

---

### WafDedicatedDomainV1TimeoutConfig <a name="WafDedicatedDomainV1TimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1TimeoutConfig;

WafDedicatedDomainV1TimeoutConfig.builder()
//  .connectTimeout(java.lang.Number)
//  .readTimeout(java.lang.Number)
//  .sendTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout">sendTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}.

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}.

---

##### `sendTimeout`<sup>Optional</sup> <a name="sendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout"></a>

```java
public java.lang.Number getSendTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedDomainV1ServerList <a name="WafDedicatedDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1ServerList;

new WafDedicatedDomainV1ServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get"></a>

```java
public WafDedicatedDomainV1ServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>>

---


### WafDedicatedDomainV1ServerOutputReference <a name="WafDedicatedDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1ServerOutputReference;

new WafDedicatedDomainV1ServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput">clientProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput">serverProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```java
public java.lang.String getClientProtocolInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```java
public java.lang.String getServerProtocolInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server">WafDedicatedDomainV1Server</a>

---


### WafDedicatedDomainV1TimeoutConfigOutputReference <a name="WafDedicatedDomainV1TimeoutConfigOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_domain_v1.WafDedicatedDomainV1TimeoutConfigOutputReference;

new WafDedicatedDomainV1TimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout">resetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout">resetSendTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetReadTimeout` <a name="resetReadTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout"></a>

```java
public void resetReadTimeout()
```

##### `resetSendTimeout` <a name="resetSendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout"></a>

```java
public void resetSendTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput">readTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput">sendTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout">sendTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `readTimeoutInput`<sup>Optional</sup> <a name="readTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput"></a>

```java
public java.lang.Number getReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `sendTimeoutInput`<sup>Optional</sup> <a name="sendTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput"></a>

```java
public java.lang.Number getSendTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

---

##### `sendTimeout`<sup>Required</sup> <a name="sendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout"></a>

```java
public java.lang.Number getSendTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue"></a>

```java
public WafDedicatedDomainV1TimeoutConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---



