# `networkingSubnetV2` Submodule <a name="`networkingSubnetV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSubnetV2 <a name="NetworkingSubnetV2" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2 opentelekomcloud_networking_subnet_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2;

NetworkingSubnetV2.Builder.create(Construct scope, java.lang.String id)
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
    .cidr(java.lang.String)
    .networkId(java.lang.String)
//  .allocationPools(IResolvable)
//  .allocationPools(java.util.List<NetworkingSubnetV2AllocationPools>)
//  .dnsNameservers(java.util.List<java.lang.String>)
//  .enableDhcp(java.lang.Boolean)
//  .enableDhcp(IResolvable)
//  .gatewayIp(java.lang.String)
//  .hostRoutes(IResolvable)
//  .hostRoutes(java.util.List<NetworkingSubnetV2HostRoutes>)
//  .id(java.lang.String)
//  .ipVersion(java.lang.Number)
//  .name(java.lang.String)
//  .noGateway(java.lang.Boolean)
//  .noGateway(IResolvable)
//  .region(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(NetworkingSubnetV2Timeouts)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.allocationPools">allocationPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>></code> | allocation_pools block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.dnsNameservers">dnsNameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.enableDhcp">enableDhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.hostRoutes">hostRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>></code> | host_routes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.noGateway">noGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.networkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}.

---

##### `allocationPools`<sup>Optional</sup> <a name="allocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.allocationPools"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>>

allocation_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#allocation_pools NetworkingSubnetV2#allocation_pools}

---

##### `dnsNameservers`<sup>Optional</sup> <a name="dnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.dnsNameservers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}.

---

##### `enableDhcp`<sup>Optional</sup> <a name="enableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.enableDhcp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}.

---

##### `gatewayIp`<sup>Optional</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.gatewayIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}.

---

##### `hostRoutes`<sup>Optional</sup> <a name="hostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.hostRoutes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>>

host_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#host_routes NetworkingSubnetV2#host_routes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}.

---

##### `noGateway`<sup>Optional</sup> <a name="noGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.noGateway"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#timeouts NetworkingSubnetV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.valueSpecs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools">putAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes">putHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools">resetAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers">resetDnsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp">resetEnableDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp">resetGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes">resetHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway">resetNoGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllocationPools` <a name="putAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools"></a>

```java
public void putAllocationPools(IResolvable OR java.util.List<NetworkingSubnetV2AllocationPools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>>

---

##### `putHostRoutes` <a name="putHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes"></a>

```java
public void putHostRoutes(IResolvable OR java.util.List<NetworkingSubnetV2HostRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts"></a>

```java
public void putTimeouts(NetworkingSubnetV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---

##### `resetAllocationPools` <a name="resetAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools"></a>

```java
public void resetAllocationPools()
```

##### `resetDnsNameservers` <a name="resetDnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers"></a>

```java
public void resetDnsNameservers()
```

##### `resetEnableDhcp` <a name="resetEnableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp"></a>

```java
public void resetEnableDhcp()
```

##### `resetGatewayIp` <a name="resetGatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp"></a>

```java
public void resetGatewayIp()
```

##### `resetHostRoutes` <a name="resetHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes"></a>

```java
public void resetHostRoutes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId"></a>

```java
public void resetId()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName"></a>

```java
public void resetName()
```

##### `resetNoGateway` <a name="resetNoGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway"></a>

```java
public void resetNoGateway()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs"></a>

```java
public void resetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2;

NetworkingSubnetV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2;

NetworkingSubnetV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2;

NetworkingSubnetV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2;

NetworkingSubnetV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkingSubnetV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkingSubnetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkingSubnetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingSubnetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools">allocationPools</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes">hostRoutes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput">allocationPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput">dnsNameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput">enableDhcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput">gatewayIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput">hostRoutesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput">noGatewayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers">dnsNameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp">enableDhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway">noGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allocationPools`<sup>Required</sup> <a name="allocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools"></a>

```java
public NetworkingSubnetV2AllocationPoolsList getAllocationPools();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a>

---

##### `hostRoutes`<sup>Required</sup> <a name="hostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes"></a>

```java
public NetworkingSubnetV2HostRoutesList getHostRoutes();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts"></a>

```java
public NetworkingSubnetV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a>

---

##### `allocationPoolsInput`<sup>Optional</sup> <a name="allocationPoolsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput"></a>

```java
public java.lang.Object getAllocationPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `dnsNameserversInput`<sup>Optional</sup> <a name="dnsNameserversInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput"></a>

```java
public java.util.List<java.lang.String> getDnsNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableDhcpInput`<sup>Optional</sup> <a name="enableDhcpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput"></a>

```java
public java.lang.Object getEnableDhcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput"></a>

```java
public java.lang.String getGatewayIpInput();
```

- *Type:* java.lang.String

---

##### `hostRoutesInput`<sup>Optional</sup> <a name="hostRoutesInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput"></a>

```java
public java.lang.Object getHostRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput"></a>

```java
public java.lang.Number getIpVersionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `noGatewayInput`<sup>Optional</sup> <a name="noGatewayInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput"></a>

```java
public java.lang.Object getNoGatewayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `dnsNameservers`<sup>Required</sup> <a name="dnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers"></a>

```java
public java.util.List<java.lang.String> getDnsNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableDhcp`<sup>Required</sup> <a name="enableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp"></a>

```java
public java.lang.Object getEnableDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion"></a>

```java
public java.lang.Number getIpVersion();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `noGateway`<sup>Required</sup> <a name="noGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway"></a>

```java
public java.lang.Object getNoGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSubnetV2AllocationPools <a name="NetworkingSubnetV2AllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2AllocationPools;

NetworkingSubnetV2AllocationPools.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}.

---

### NetworkingSubnetV2Config <a name="NetworkingSubnetV2Config" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2Config;

NetworkingSubnetV2Config.builder()
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
    .cidr(java.lang.String)
    .networkId(java.lang.String)
//  .allocationPools(IResolvable)
//  .allocationPools(java.util.List<NetworkingSubnetV2AllocationPools>)
//  .dnsNameservers(java.util.List<java.lang.String>)
//  .enableDhcp(java.lang.Boolean)
//  .enableDhcp(IResolvable)
//  .gatewayIp(java.lang.String)
//  .hostRoutes(IResolvable)
//  .hostRoutes(java.util.List<NetworkingSubnetV2HostRoutes>)
//  .id(java.lang.String)
//  .ipVersion(java.lang.Number)
//  .name(java.lang.String)
//  .noGateway(java.lang.Boolean)
//  .noGateway(IResolvable)
//  .region(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(NetworkingSubnetV2Timeouts)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools">allocationPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>></code> | allocation_pools block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers">dnsNameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp">enableDhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes">hostRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>></code> | host_routes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway">noGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}.

---

##### `allocationPools`<sup>Optional</sup> <a name="allocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools"></a>

```java
public java.lang.Object getAllocationPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>>

allocation_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#allocation_pools NetworkingSubnetV2#allocation_pools}

---

##### `dnsNameservers`<sup>Optional</sup> <a name="dnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers"></a>

```java
public java.util.List<java.lang.String> getDnsNameservers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}.

---

##### `enableDhcp`<sup>Optional</sup> <a name="enableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp"></a>

```java
public java.lang.Object getEnableDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}.

---

##### `gatewayIp`<sup>Optional</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}.

---

##### `hostRoutes`<sup>Optional</sup> <a name="hostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes"></a>

```java
public java.lang.Object getHostRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>>

host_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#host_routes NetworkingSubnetV2#host_routes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion"></a>

```java
public java.lang.Number getIpVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}.

---

##### `noGateway`<sup>Optional</sup> <a name="noGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway"></a>

```java
public java.lang.Object getNoGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts"></a>

```java
public NetworkingSubnetV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#timeouts NetworkingSubnetV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}.

---

### NetworkingSubnetV2HostRoutes <a name="NetworkingSubnetV2HostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2HostRoutes;

NetworkingSubnetV2HostRoutes.builder()
    .destinationCidr(java.lang.String)
    .nextHop(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}. |

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}.

---

### NetworkingSubnetV2Timeouts <a name="NetworkingSubnetV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2Timeouts;

NetworkingSubnetV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSubnetV2AllocationPoolsList <a name="NetworkingSubnetV2AllocationPoolsList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2AllocationPoolsList;

new NetworkingSubnetV2AllocationPoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get"></a>

```java
public NetworkingSubnetV2AllocationPoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>>

---


### NetworkingSubnetV2AllocationPoolsOutputReference <a name="NetworkingSubnetV2AllocationPoolsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2AllocationPoolsOutputReference;

new NetworkingSubnetV2AllocationPoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools">NetworkingSubnetV2AllocationPools</a>

---


### NetworkingSubnetV2HostRoutesList <a name="NetworkingSubnetV2HostRoutesList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2HostRoutesList;

new NetworkingSubnetV2HostRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get"></a>

```java
public NetworkingSubnetV2HostRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>>

---


### NetworkingSubnetV2HostRoutesOutputReference <a name="NetworkingSubnetV2HostRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2HostRoutesOutputReference;

new NetworkingSubnetV2HostRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput"></a>

```java
public java.lang.String getDestinationCidrInput();
```

- *Type:* java.lang.String

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput"></a>

```java
public java.lang.String getNextHopInput();
```

- *Type:* java.lang.String

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes">NetworkingSubnetV2HostRoutes</a>

---


### NetworkingSubnetV2TimeoutsOutputReference <a name="NetworkingSubnetV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.networking_subnet_v2.NetworkingSubnetV2TimeoutsOutputReference;

new NetworkingSubnetV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---



