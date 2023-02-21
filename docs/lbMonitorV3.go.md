# `lbMonitorV3` Submodule <a name="`lbMonitorV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbMonitorV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMonitorV3 <a name="LbMonitorV3" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3 opentelekomcloud_lb_monitor_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbmonitorv3"

lbmonitorv3.NewLbMonitorV3(scope Construct, id *string, config LbMonitorV3Config) LbMonitorV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes">ResetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown">ResetMaxRetriesDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort">ResetMonitorPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp"></a>

```go
func ResetAdminStateUp()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetExpectedCodes` <a name="ResetExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes"></a>

```go
func ResetExpectedCodes()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxRetriesDown` <a name="ResetMaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown"></a>

```go
func ResetMaxRetriesDown()
```

##### `ResetMonitorPort` <a name="ResetMonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort"></a>

```go
func ResetMonitorPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath"></a>

```go
func ResetUrlPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbmonitorv3"

lbmonitorv3.LbMonitorV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbmonitorv3"

lbmonitorv3.LbMonitorV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbmonitorv3"

lbmonitorv3.LbMonitorV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput">DelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput">ExpectedCodesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput">MaxRetriesDownInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput">MonitorPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput">UrlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay">Delay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes">ExpectedCodes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown">MaxRetriesDown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort">MonitorPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath">UrlPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput"></a>

```go
func AdminStateUpInput() interface{}
```

- *Type:* interface{}

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput"></a>

```go
func DelayInput() *f64
```

- *Type:* *f64

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `ExpectedCodesInput`<sup>Optional</sup> <a name="ExpectedCodesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput"></a>

```go
func ExpectedCodesInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxRetriesDownInput`<sup>Optional</sup> <a name="MaxRetriesDownInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput"></a>

```go
func MaxRetriesDownInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MonitorPortInput`<sup>Optional</sup> <a name="MonitorPortInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput"></a>

```go
func MonitorPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput"></a>

```go
func UrlPathInput() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp"></a>

```go
func AdminStateUp() interface{}
```

- *Type:* interface{}

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay"></a>

```go
func Delay() *f64
```

- *Type:* *f64

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ExpectedCodes`<sup>Required</sup> <a name="ExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes"></a>

```go
func ExpectedCodes() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MaxRetriesDown`<sup>Required</sup> <a name="MaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown"></a>

```go
func MaxRetriesDown() *f64
```

- *Type:* *f64

---

##### `MonitorPort`<sup>Required</sup> <a name="MonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort"></a>

```go
func MonitorPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath"></a>

```go
func UrlPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbMonitorV3Config <a name="LbMonitorV3Config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbmonitorv3"

&lbmonitorv3.LbMonitorV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Delay: *f64,
	MaxRetries: *f64,
	PoolId: *string,
	Timeout: *f64,
	Type: *string,
	AdminStateUp: interface{},
	DomainName: *string,
	ExpectedCodes: *string,
	HttpMethod: *string,
	Id: *string,
	MaxRetriesDown: *f64,
	MonitorPort: *f64,
	Name: *string,
	ProjectId: *string,
	UrlPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay">Delay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#delay LbMonitorV3#delay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#max_retries LbMonitorV3#max_retries}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId">PoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#pool_id LbMonitorV3#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#timeout LbMonitorV3#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#type LbMonitorV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#domain_name LbMonitorV3#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes">ExpectedCodes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#http_method LbMonitorV3#http_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#id LbMonitorV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown">MaxRetriesDown</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort">MonitorPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#name LbMonitorV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#project_id LbMonitorV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath">UrlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#url_path LbMonitorV3#url_path}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay"></a>

```go
Delay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#delay LbMonitorV3#delay}.

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#max_retries LbMonitorV3#max_retries}.

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#pool_id LbMonitorV3#pool_id}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#timeout LbMonitorV3#timeout}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#type LbMonitorV3#type}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp"></a>

```go
AdminStateUp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#domain_name LbMonitorV3#domain_name}.

---

##### `ExpectedCodes`<sup>Optional</sup> <a name="ExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes"></a>

```go
ExpectedCodes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#http_method LbMonitorV3#http_method}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#id LbMonitorV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxRetriesDown`<sup>Optional</sup> <a name="MaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown"></a>

```go
MaxRetriesDown *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}.

---

##### `MonitorPort`<sup>Optional</sup> <a name="MonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort"></a>

```go
MonitorPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#name LbMonitorV3#name}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#project_id LbMonitorV3#project_id}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath"></a>

```go
UrlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_monitor_v3#url_path LbMonitorV3#url_path}.

---



